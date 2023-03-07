import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { auth } from "@/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useIdToken } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import HowToRegIcon from "@mui/icons-material/HowToReg";

export default function Signup() {
  const router = useRouter();
  const [user, loading, error] = useIdToken(auth);

  const onSubmit = (event) => {
    event.preventDefault();
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    const confirmed = data.get("confirmPassword");
    if (password === confirmed)
      createUserWithEmailAndPassword(auth, email, password)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
          console.log(authUser);
          router.push("/");
        })
        .catch((error) => {
          // An error occurred. Set error message to be displayed to user
          console.log(error.message);
        });
    else console.log("Password do not match");
  };

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    //during dev at least
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    router.push("/");
    return (
      <>
        <p>Redirecting...</p>
      </>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <HowToRegIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="confirmPassword"
            type="password"
            id="confirmPassword"
            autoComplete="confirmPassword"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
