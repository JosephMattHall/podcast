import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@/components/BackToTop";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";
import MuiNextLink from "@/components/MuiNextLink";
import Navbar from '@/components/Navbar';
import SideDrawer from "@/components/SideDrawer";
import HideOnScroll from "@/components/HideOnScroll";
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/themes/theme";

export const navLinks = [
  { title: `home`, path: `/` },
];

const Header = () => {
  return (

    <ThemeProvider theme={theme}>
      <HideOnScroll>
        <AppBar position="afixed" >
          <Toolbar>
            <Container
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Home
                    sx={{
                      color: (theme) => theme.palette.common.white,
                    }}
                    fontSize="large"
                  />
                </MuiNextLink>
              </IconButton>
              <Navbar />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
        </HideOnScroll>
        <div id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="primary.main" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
      </ThemeProvider>

  );
};

export default Header;