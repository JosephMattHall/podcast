// pages/admin/index.jsx
import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import { Container, Typography, Button, Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton, Paper } from '@mui/material';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'episodes', id));
      setEpisodes((prevEpisodes) => prevEpisodes.filter((episode) => episode.id !== id));
    } catch (error) {
      console.error('Error deleting episode:', error);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container justifyContent="space-between" alignItems="center" marginBottom={4}>
        <Typography variant="h4">Dashboard / Episodes</Typography>
        <Link href="/admin/episodes/create" passHref>
          <Button variant="contained" color="primary">
            New Episode
          </Button>
        </Link>
      </Grid>
      {loading && <p>Loading...</p>}
      {episodes.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Season</TableCell>
                <TableCell align="right">Episode</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {episodes.map((episode) => (
                <TableRow key={episode.id}>
                  <TableCell>{episode.title}</TableCell>
                  <TableCell align="right">{episode.season}</TableCell>
                  <TableCell align="right">{episode.episode}</TableCell>
                  <TableCell align="right">
                    <Link href={`/admin/episodes/${episode.id}`} passHref>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton color="secondary" onClick={() => handleDelete(episode.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
