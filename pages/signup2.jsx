import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../auth/AuthUserContext';

import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useForm } from "react-hook-form";
  


export default function App() {
  const router = useRouter();

  const { createUserWithEmailAndPassword } = useAuth();

    
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    let email = data['email'];
    let password = data['password'];
    let confirmed = data['confirmPassword'];
    if(password === confirmed)
    createUserWithEmailAndPassword(email, password)
    .then(authUser => {
        console.log("Success. The user is created in Firebase")
        router.push("/");
    })
    .catch(error => {
        // An error occurred. Set error message to be displayed to user
        console.log(error.message)
    });
    else
    console.log("Password do not match")

  };
  

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="password" {...register("password", {required: true, max: 24, min: 6})} />
      <input type="password" placeholder="confirmPassword" {...register("confirmPassword", {required: true, max: 24, min: 6})} />

      <input type="submit" />
    </form>
  );
}