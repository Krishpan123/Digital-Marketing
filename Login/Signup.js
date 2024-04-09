import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup, } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import app from '../Firebase/Firebase.init';
import useFirebase from '../Hooks/useFirebase';
const auth = getAuth(app)





export default function Signup() {
    
    const { signInWithGoogle } = useFirebase();

    const [user, setUser] = useState({});

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmail = (event) => {
        setEmail(event.target.value);

    }
    const getPassword = (event) => {
        setPassword(event.target.value);

    }


    const handleSubmit = event => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                verifyEmail();
            })
            .catch(error => {
                console.error('Error creating user:', error.message);
            });

        event.preventDefault();
    }


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Verification send")
            })
    }



    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, mb: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                onBlur={getEmail}

                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                onBlur={getPassword}

                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Remember Me"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container direction="column" alignItems="center">

                        <Grid container direction="column" alignItems="center">
                            <Grid item>
                                Already have an account?
                                <Link to='/signin' variant="body2">
                                    Sign in
                                </Link>
                            </Grid>
                            <Grid item>
                                Or Sign With

                            </Grid>
                            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                                <Button
                                    variant="contained"
                                    onClick={signInWithGoogle}
                                    startIcon={<Google />}
                                    fullWidth
                                    sx={{ width: '100%', marginBottom: '7px' }}
                                >
                                    Google
                                </Button>


                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    );
}
