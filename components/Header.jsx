import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@/components/BackToTop";
import MuiNextLink from "@/components/MuiNextLink";
import Navbar from "@/components/Navbar";
import SideDrawer from "@/components/SideDrawer";
import HideOnScroll from "@/components/HideOnScroll";
import { useTheme } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';

export const navLinks = [{ title: `home`, path: `/` }];

const Header = () => {
  const theme = useTheme();
  return (
    <>
      <HideOnScroll>
        <AppBar position="relative">
          <Toolbar>
            <Container
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
            
                <MuiNextLink activeClassName="active" href="/">

                
                <IconButton
                  variant="contained"
                >
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={1}
                  >
                  <PodcastsIcon fontSize="large"/>
                  <Typography color={theme.palette.text.primary} variant="subtitle" sx={{pt:1}}>
                    Murder Savy
                  </Typography>
                </Stack>
                </IconButton>
                

                </MuiNextLink>
              <Navbar />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div id="back-to-top-anchor" />
      <BackToTop>
        <Fab size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
