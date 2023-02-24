import Head from 'next/head'
import Image from 'next/image'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';

import background from '@/public/spooky_path1.jpeg';
import { Typography } from '@mui/material';
import { collection, getDocs } from "firebase/firestore";

import MultiPlayer from "@/components/MultiPlayer";

const tracks = [
  {
    title: "track 1",
    subtitle: "subtitle",
    art: "/logo.png",
    src: "/test.mp3"
  },
  {
    title: "track 2",
    subtitle: "subtitle",
    art: "/logo.png",
    src: "/test.mp3"
  },
  {
    title: "track 3",
    subtitle: "subtitle",
    art: "/logo.png",
    src: "/test.mp3"
  },
  {
    title: "track 4",
    subtitle: "subtitle",
    art: "/logo.png",
    src: "/test.mp3"
  }
  
];

export default function Home() {





  return (
    <>
      <Hero
        imgSrc={background}
        imgAlt="a spooky background"
      />
      <Container>
        
        <Typography
          variant="h4"
          sx={{
            py: 3
          }}
        >
          Episodes
        </Typography>
        <Container
        sx={{
          pb: 10
        }}>
        <Container
          sx={{
            boxShadow: "0 0 0 1rem grey",
            borderRadius: "10px",
            pb: 5
          }}
        >
        <MultiPlayer 
          trackList={tracks}
          
          />
          </Container>
          </Container>
      </Container>
      </>
  )
}
