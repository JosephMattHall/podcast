import Head from "next/head";
import Box from "@mui/material/Box";
import Hero from "@/components/Hero";
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase-config';
import { useTheme } from "@mui/material/styles";
import ListPlayer from "@/components/ListPlayer";

export default function Home() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      const episodesRef = collection(db, 'episodes');
      const episodesSnapshot = await getDocs(episodesRef);
      const episodesData = episodesSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
      setEpisodes(episodesData);
    };
    fetchEpisodes();
    setLoading(false);
  }, []);

  return (
      <>
      <Head>
        <title>Murder Savy | Home</title>
      </Head>
        <Hero />
        <Box>
        { loading && 
          <p>loading...</p>
        }
        {episodes.length > 0 &&
        <ListPlayer trackList={episodes} />
        }
        </Box>
      </>
    );

  
  
}
