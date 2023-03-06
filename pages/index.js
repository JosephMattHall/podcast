import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Hero from "@/components/Hero";


import background from "@/public/spooky_path1.jpeg";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase-config';
import { useTheme } from "@mui/material/styles";
import ListPlayer from "@/components/ListPlayer";

const track = {
  title: "A title",
  src: "https://firebasestorage.googleapis.com/v0/b/podcast-site-78d48.appspot.com/o/test.mp3?alt=media&token=1cf9947d-cc08-43a6-9a91-eee0cebf757d",
  artwork: "/art"
}

export default function Home() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      const episodesRef = collection(db, 'episodes');
      const episodesSnapshot = await getDocs(episodesRef);
      const episodesData = episodesSnapshot.docs.map((doc) => ( doc.data() ));
      setEpisodes(episodesData);
    };
    fetchEpisodes();
    setLoading(false);
  }, []);

  return (
      <>
        <Hero imgSrc={background} imgAlt="a spooky background" />
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
