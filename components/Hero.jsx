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
import Link from 'next/link';

import logo from "@/public/logo.png";


export default function Hero () {

  return (

      <Grid container spacing={10}sx={{ backgroundColor: useTheme.apply(), pt:5, px: 5}} >
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
            Let's scale your business
          </Typography>
          <Typography variant="h6" >
            Hire professionals who [..truccated..] we are your best client.
          </Typography>
          <Container
          sx={{
            pt: 5
          }}
          >
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            HIRE US
          </Button>
          </Container>
          </Stack>
        </Grid>
      </Grid>


)
}