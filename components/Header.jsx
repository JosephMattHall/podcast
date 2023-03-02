import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@/components/BackToTop";
import Button from "@mui/material/Button";
import MuiNextLink from "@/components/MuiNextLink";
import Navbar from '@/components/Navbar';
import SideDrawer from "@/components/SideDrawer";
import HideOnScroll from "@/components/HideOnScroll";
import { useTheme } from '@mui/material/styles';
import Avatar from "@mui/material/Avatar";
export const navLinks = [
  { title: `home`, path: `/` },
];

const Header = () => {
  const theme = useTheme();
  return (
    <>
      <HideOnScroll>
        <AppBar position="relative" color="inherit"  >
          <Toolbar>
            <Container
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <Button>
                <MuiNextLink activeClassName="active" href="/">
                <Avatar
                  variant="square"
                  alt="MS Podcast"
                  src="/icon_logo.png"
                  sx={{ width: 134, height: 75 }}
                />
                </MuiNextLink>
              </Button>
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