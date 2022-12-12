import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { getMe, updateProfile, User } from '../../requests/auth';

import './cabinet.scss'
import { Alert } from '@mui/material';

export const Data = () => {

    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isDone, setIsDone] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get('password') !== data.get('confirm_password')) {
            return setError('Password and confirm password doesn\'t match');
        }

        try {
            const result = await updateProfile({
                first_name: data.get('first_name') as string,
                last_name: data.get('last_name') as string,
                phone: data.get('phone') as string,
                address: data.get('address') as string,
                email: user?.email || '',
                password: data.get('password') as string,
                oldPassword: data.get('old_password') as string,
            });
            setUser(result);
            setIsDone(true);
            setError('');
        } catch (error) {
            setIsDone(false);
            console.log(error);
            setError((error as any).response.data);
        }
    };

    useEffect(() => {
        async function fetchMe() {
            const me = await getMe();
            setUser(me);
            setIsLoading(false);
        }

        fetchMe();
    }, []);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <Container component="main" maxWidth="sm" className='data'>
            <Box
                sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h2>Redacteaza datele personale</h2>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid item xs={12} spacing={4} sx={{ marginBottom: 4 }}>
                        {error && <Alert severity="error">{error}</Alert>}
                        {isDone && <Alert severity='success'>Date personale au fost salvate</Alert>}
                    </Grid>

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
                                defaultValue={user?.first_name}
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
                                defaultValue={user?.last_name}
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
                                defaultValue={user?.phone}
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
                                defaultValue={user?.address}
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
                                disabled={true}
                                defaultValue={user?.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="old_password"
                                id="old_password"
                                label="Password"
                                type="password"
                                autoComplete="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                id="password"
                                label=" New Password"
                                type="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirm_password"
                                id="confirm_password"
                                label="Connfirm Password"
                                type="password"
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
                        Salveaza
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}