import * as React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Button from "@mui/material/Button";
import { storage } from "@/firebase-config";
import { collection, addDoc, FieldValue } from "firebase/firestore";
import Alert from "@mui/material/Alert";
import { db } from "@/firebase-config";

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

  const [selectedFile, setSelectedFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [circularProgress, setCircularProgress] = useState(0);

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
      alert("Please choose a file first!");
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
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload compconsted successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LoginIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="duration"
            label="duration"
            id="duration"
            autoComplete="Duration in seconds"
          />
          <input accept="audio" type="file" onChange={handleFileChange} />

          <Button
            onClick={handleFileUpload}
            variant="contained"
            component="label"
          >
            Upload
          </Button>
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
      <Alert severity="error">This is an error alert — check it out!</Alert>
    </Container>
  );
}
