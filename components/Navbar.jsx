import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "@/firebase-config";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
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
  return (

    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" alignItems="center">
      {user ? (
        <>
        <Typography color={theme.palette.text.primary} variant="subtitle">
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
        <Button variant="text" onClick={() => router.push("/auth/login")}>
          <Typography color={theme.palette.text.primary} variant="subtitle">
            Login
          </Typography>
        </Button>
        </>
            )}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
