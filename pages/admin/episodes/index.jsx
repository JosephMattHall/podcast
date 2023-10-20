// pages/admin/index.jsx
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase-config';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Link from 'next/link';

export default function AdminIndex() {
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      const episodesRef = collection(db, 'episodes');
      const episodesSnapshot = await getDocs(episodesRef);
      const episodesData = episodesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEpisodes(episodesData);
      setLoading(false);
    };
    fetchEpisodes();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container justifyContent="flex-end">
        <Link href="/admin/episodes/create" passHref>
          <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
            New Episode
          </Button>
        </Link>
      </Grid>
      {loading && <p>Loading...</p>}
      {episodes.length > 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Episodes
          </Typography>
          {episodes.map((episode) => (
            <Box key={episode.id} sx={{ marginBottom: 2 }}>
              <Typography variant="subtitle1">{episode.title}</Typography>
              <Link href={`/admin/episodes/${episode.id}`} passHref>
                <Button variant="outlined" color="primary" sx={{ marginRight: 2 }}>
                  View
                </Button>
              </Link>
              <Link href={`/admin/episodes/${episode.id}/edit`} passHref>
                <Button variant="outlined" color="secondary">
                  Edit
                </Button>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
}
