import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';

import background from '@/public/spooky_path1.jpeg';
import { Typography } from '@mui/material';
import { collection, getDocs } from "firebase/firestore";
import { useTheme } from '@mui/material/styles';
import ListPlayer from "@/components/ListPlayer";




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
},
{
  title: "track 5",
  subtitle: "subtitle",
  art: "/logo.png",
  src: "/test.mp3"
},
];
  

export default function Home() {
  const theme = useTheme();



  return (
    <>
      <Hero
        imgSrc={background}
        imgAlt="a spooky background" 
        />
        <Box >
      <ListPlayer  trackList={tracks} />
      </Box>
    </>
  )
}
