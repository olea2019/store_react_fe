import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { signUp } from '../../requests/auth';

export const SingUpBlock = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const result = await signUp({
            first_name: data.get('first_name') as string,
            last_name: data.get('last_name') as string,
            phone: data.get('phone') as string,
            address: data.get('address') as string,
            email: data.get('email') as string,
            password: data.get('password') as string,
        });
        localStorage.setItem('token', result.token);
        navigate('/cabinet')
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h2>Sign up</h2>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="first_name"
                                required
                                fullWidth
                                id="first_name"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="last_name"
                                type='email'
                                label="Last Name"
                                name="last_name"
                                autoComplete="family-name"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="phone"
                                type='number'
                                required
                                fullWidth
                                id="phone"
                                label="Phone"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="address"
                                type='address'
                                required
                                fullWidth
                                id="address"
                                label="Address"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                type='email'
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
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
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
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/singIn">
                                {"Already have an account? Sign in"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}