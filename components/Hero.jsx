import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';

import { useRouter } from "next/router"
import logo from "@/public/logo.png";



export default function Hero () {
  const router = useRouter();
  const theme = useTheme();
  return (

      <Grid container spacing={10}sx={{ pt:5, px: 5}} >
      <Grid item xs={12} md={5}>
        <Container align="center">
        <Image
              src={logo}
              alt="logo"
              width={400}
              height={400}
              style={{

                width: "400px",
                borderRadius: '100%',
                overflow: 'hidden',

              }}
              
            />
            </Container>
        </Grid>
        <Grid
          item xs={12}
          md={7}
          align="center"
          justifyContent="center"
          
          >
            <Stack direction="column">
          <Typography variant="h3" >
            Murder Savy
          </Typography>
          <Typography variant="h6" >
          Welcome aboard the Murder Savvy Podcast with Tali Hall! We will sail through stories of survival, strange events, questionable occurrences, myths, legends, and without a doubt, murder, savvy?
          </Typography>
          <Container
          sx={{
            pt: 5
          }}
          >
          <Button
            variant="contained"

            sx={{ width: '200px', fontSize: '16px' }}
          >
            <span onClick={() => router.push('/test')}>
            <Typography
            variant="p"
            paddingRight={1}>
            Listen Now
          </Typography>
          <PodcastsIcon />
            </span>
          </Button>
          </Container>
          </Stack>
        </Grid>
      </Grid>


);
};