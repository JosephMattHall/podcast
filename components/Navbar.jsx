import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MuiNextLink from "@/components/MuiNextLink";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase-config";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    signOut(auth);
    router.push("/");
  };
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        <Button variant="contained">
          <MuiNextLink activeClassName="active" href="/">
          <Typography color={theme.palette.text.primary} variant="subtitle" sx={{pt:1}}>
            Logout
            </Typography>
          </MuiNextLink>
        </Button>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
