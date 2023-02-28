import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Link from 'next/link';

import logo from "@/public/logo.png";
import background from "@/public/spooky_path1.jpeg";



const darkTheme = createTheme({ palette: { mode: 'dark' } });


const Hero = ({ imgSrc, imgAlt } ) => {
  return (

    <ThemeProvider theme={darkTheme}>
    <Grid
        component="section"
        container


        
        sx={{
          position: 'relative',
          height: "100vh",
          width: `100vw`,
          overflow: `hidden`,
          zIndex: -100,

          }}
    >
        
            <Image
                priority
                src={background}
                alt={"a spooky forrest path"}
                fill="true"
            />
      
        <Grid
            container
            alignItems="flex-start"
            sx={{
            p: 5,
            position: `absolute`, 
            inset: 0,
            fill: true,
            backgroundColor: "rgba(0,0,0, .7)",
            }}
        >
        
            <Paper
              sx={{
              borderRadius: "50px",
              opacity:0.8,
              inset: 4

              }}
            >
              <Stack

                direction="column"
                divider={<Divider orientation="horizontal" flexItem/>}
                spacing={2}
            >
              <Stack
                alignItems="center"
                direction="row"
                divider={<Divider orientation="horizontal" flexItem/>}
                spacing={2}
                sx={{
                  px: 10,
                  pb: 20,
                  pt: 10
                }}
            >
              <div
                  style={{
                  width: "550px",
                  borderRadius: '100%',
                  overflow: 'hidden',
                  }}
              >
                  <Image
                  src={logo}
                  alt="Murder Savy Logo"
                  align="center"
                  />
              </div>
              <Stack
              
                align="center"
                direction="column"
                alignItems="center"
                justifyContent="center"        
            >
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        color: "common.white",
                        p:2,
                        opacity: 0.9
                    }}
                >
                    Murder Savy
                </Typography>

                    <Typography
                        md={7}
                        aragraph="true"
                        variant="h5"
                        align="center"
                        sx={{
                        paragraph: true,
                        color: "common.white",
                        opacity: 0.9,
                        m: 5
                        }}
                    >
                 Welcome aboard the Murder Savvy Podcast with Tali Hall! We will sail through stories of survival, strange events, questionable occurrences, myths, legends, and without a doubt, murder, savvy? 
                 
              </Typography>
              <Stack
              justifyContent="center"
                alignItems="center"
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >

              <Button
                variant="outlined"
                sx={{
                  color: "common.white",
                  borderColor: "common.white"
                }}
              >
              <Typography
                  variant="h4"
                  sx={{
                    color: "common.white",
                  }}
                >

                   Find us
                </Typography>
                <PodcastsIcon
                  size="large"
                  sx={{ ml:2 }}
                />
              </Button>

              <Button
                variant="outlined"
                sx={{
                  color: "common.white",
                  borderColor: "common.white"
                }}
              >
              <Typography
                  variant="h4"
                  sx={{
                    color: "common.white",
                  }}
                >
                  Share
                </Typography>
                
                <LaunchOutlinedIcon 
                  size="large"
                  sx={{ ml:2 }}
                />
              </Button>
              </Stack>

              

          
              </Stack>
              </Stack>
              </Stack>
          </Paper>
          </Grid>
        </Grid>
        </ThemeProvider>

      


  );
}

export default Hero;