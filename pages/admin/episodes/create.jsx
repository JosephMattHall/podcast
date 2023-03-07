import * as React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { storage } from "@/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Alert from "@mui/material/Alert";
import { db } from "@/firebase-config";
import Collapse from '@mui/material/Collapse';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

export default function CreateEpisode() {

  const router = useRouter();

  const [severity, setSeverity] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [circularProgress, setCircularProgress] = useState(0);

  const handleCollapse = () => {
    setError((prev) => !prev);
  };

  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "audio/mpeg",
  };

  // Handles input change event and updates state
  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleFileUpload() {
    if (!selectedFile) {
      setError(true);
      setSeverity("info")
      setMessage("Please choose a file first!");
    }
    switch(selectedFile.type){
      case 'audio/mpeg':
        //('image type is png');
        break;
      case 'audio/wav':
        //('image/jpg')
        break;
      case 'audio/ogg':
        //('image is jpeg')
        break;
      default:
        setError(true);
        setSeverity("error")
        setMessage("ERROR: Invalid file type.");
        return
    }

    const storageRef = ref(storage, `/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setCircularProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            setError(true);
            setSeverity("warning")
            setMessage("Upload Paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            setError(true);
            setSeverity("error")
            setMessage("ERROR: Unauthorized User");
            break;
          case "storage/canceled":
            // User canceled the upload
            setError(true);
            setSeverity("warning")
            setMessage("Upload Cancled");
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            setError(true);
            setSeverity("error")
            setMessage("ERROR: Unknown error occured");
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setError(true);
          setSeverity("success")
          setMessage("SUCCESS: Upload complete. Complete fields then Save Episode!");
          setFileUrl(downloadURL);
          setIsReady(true);
        });
      }
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title");
    const season = data.get("season");
    const episode = data.get("episode");
    const artwork = data.get("artwork");
    const duration = data.get("duration");

    const docRef = addDoc(collection(db, "episodes"), {
      title: title,
      artwork: artwork,
      audio: fileUrl,
      season: season,
      episode: episode,
      duration: duration,
    });

    router.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar>
          <LoginIcon />
        </Avatar>
        <Typography variant="h5">
          Add episode
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            autoComplete="Episode Title"
            autoFocus
          />
          <Stack direction="row">
            <TextField
              margin="normal"
              required
              name="season"
              label="season"
              id="season"
              autoComplete="Season #"
            />
            <TextField
              margin="normal"
              required
              name="episode"
              label="episode"
              id="episode"
              autoComplete="Episode #"
            />
          </Stack>
          <TextField
            margin="normal"
            required
            fullWidth
            name="artwork"
            label="artwork"
            id="artwork"
            autoComplete="Artwork url"
          />
          <Stack direction="row">
            <Button
              variant="contained"
              component="label"
            >
              Choose File

              <input hidden accept="audio/*" type="file" onChange={handleFileChange} />
            </Button>
            <Button
              onClick={handleFileUpload}
              variant="contained"
              component="label"
            >
              Upload
            </Button>
          </Stack>
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={circularProgress}
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            disabled={!isReady}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
      <Collapse in={error}>
        <Alert severity={severity ? severity : "error"}>{message ? message : "ERROR"}</Alert>
      </Collapse>
    </Container>
  );
}
