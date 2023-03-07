import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import MuiNextLink from "./MuiNextLink";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { signOut } from "firebase/auth";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "@/firebase-config";

const SideDrawer = ({ navLinks }) => {
  const router = useRouter();
  const theme = useTheme();
  const [state, setState] = useState({
    right: false,
  });
  const [user, loading, error] = useIdToken(auth);

  const handleLogout = (event) => {
    event.preventDefault();
    signOut(auth).then(() => {
      alert("signed out");
    }).catch((error) => {
      alert("error");
      console.error();
    });
      
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <Stack direction="column" sx={{alignItems: "center", justifyContent: "center"}}>
      {navLinks.map(({ title, path }, i) => (
        <Typography
          variannt="p"
          key={`${title}${i}`}
          sx={{
            textTransform: `uppercase`,
          }}
        >
          <MuiNextLink color={theme.palette.text.primary} href={path}>{title}</MuiNextLink>
        </Typography>
      ))}
      <Stack direction="row" alignItems="center" >
      {user ? (
        <>
        <Typography color={theme.palette.text.primary} variant="subtitle" sx={{ textTransform: `uppercase` }}>
        {user.displayName}
      </Typography>
        <Button variant="text" onClick={handleLogout}>
          <Typography color={theme.palette.text.primary} variant="subtitle">
            Logout
          </Typography>
        </Button>
        </>
            ) : (
              <>
        <Button variant="text" onClick={() => router.push("/admin/login")}>
          <Typography color={theme.palette.text.primary} variant="subtitle">
            Login
          </Typography>
        </Button>
        </>
            )}
      </Stack>
      </Stack>
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{

          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiDrawer-paper": {
          },
        }}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
