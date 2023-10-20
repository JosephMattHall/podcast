// ... (previous imports)

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Container, Box, TextField, Button, Stack } from "@mui/material";

export default function EpisodeDetails() {
  const router = useRouter();
  const { episode } = router.query;

  const [episodeData, setEpisodeData] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const docRef = doc(db, "episodes", episode);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setEpisodeData(docSnap.data());
        } else {
          handleError("error", "Episode not found");
        }
      } catch (error) {
        handleError("error", "Error fetching episode details");
      }
    };

    if (episode) {
      fetchEpisodeDetails();
    }
  }, [episode]);

  const handleError = (severity, message) => {
    setError(true);
    setSeverity(severity);
    setMessage(message);
  };

  const handleCollapse = () => {
    setError((prev) => !prev);
  };

  const handleUpdateEpisode = async (event) => {
    event.preventDefault();

    try {
      const docRef = doc(db, "episodes", episode);
      await updateDoc(docRef, {
        title: event.target.title.value,
        artwork: event.target.artwork.value,
        audio: event.target.audio.value,
        duration: event.target.duration.value,
        episode: event.target.episode.value,
        published: event.target.published.value,
        season: event.target.season.value,
      });

      handleError("success", "Episode details updated successfully");
    } catch (error) {
      handleError("error", "Error updating episode details");
    }
  };

  if (!episodeData) {
    return <div>Loading...</div>;
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ... (previous JSX) */}
        <Box component="form" onSubmit={handleUpdateEpisode} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="Episode Title"
            autoFocus
            defaultValue={episodeData.title}
          />
          <TextField
            margin="normal"
            fullWidth
            name="artwork"
            label="Artwork"
            id="artwork"
            autoComplete="Artwork URL"
            defaultValue={episodeData.artwork}
          />
          <TextField
            margin="normal"
            fullWidth
            name="audio"
            label="Audio"
            id="audio"
            autoComplete="Audio URL"
            defaultValue={episodeData.audio}
          />
          <TextField
            margin="normal"
            fullWidth
            name="duration"
            label="Duration"
            id="duration"
            autoComplete="Duration"
            defaultValue={episodeData.duration}
          />
          <TextField
            margin="normal"
            fullWidth
            name="episode"
            label="Episode"
            id="episode"
            autoComplete="Episode Number"
            defaultValue={episodeData.episode}
          />
          <TextField
            margin="normal"
            fullWidth
            name="published"
            label="Published"
            id="published"
            autoComplete="Published Date"
            defaultValue={episodeData.published}
          />
          <TextField
            margin="normal"
            fullWidth
            name="season"
            label="Season"
            id="season"
            autoComplete="Season Number"
            defaultValue={episodeData.season}
          />
          <Stack direction="row">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Changes
            </Button>
          </Stack>
        </Box>
        {/* ... (previous JSX) */}
      </Box>
    </Container>
  );
}
