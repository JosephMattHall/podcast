import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MuiNextLink from "./MuiNextLink";
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase-config';
const Navbar = () => {

  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    signOut(auth);
    router.push('/');
  }
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
        
      }}
    >
      <Stack direction="row" spacing={4}>
        
        <button onClick={handleClick}>
          Logout
        </button>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;