import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Button from "@mui/material/Button";
import { storage } from "@firebase-config";

const UploadAudio = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "audio/mpeg",
  };

  // Handles input change event and updates state
  function handleChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleUpload() {
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
        console.log("Upload is " + progress + "% done");
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
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL);
        });
      }
    );
  }

  return (
    <div>
      <Button onClick={handleUpload} variant="contained" component="label">
        Upload
        <input
          hidden
          accept="image"
          multiple
          type="file"
          onChange={handleChange}
        />
      </Button>
      <p>{fileUrl}</p>
    </div>
  );
};

export default UploadAudio;
