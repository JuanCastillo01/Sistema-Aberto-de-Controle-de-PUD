import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useLoginRequest } from '../api/useLoginRequest';
import { Grid, Paper, Box } from '@mui/material';
import { IUserLoginRequest, IUserResponse, IUserSigninRequest } from '../tipagem/IUser';
import { userLoginInitial } from '../constantes/CUser';

const LogIn: React.FC = () => {
  const { data, error, loading, mandarUser } = useLoginRequest();
  const [formData, setFormData] = useState<IUserLoginRequest>(userLoginInitial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mandarUser(formData)

    console.log('Log In Data:', formData);

    console.log('Log In Data:', data);
  };

  return (
    <Grid container justifyContent={'center'} >
      <Grid item xs={6} padding={3}>
        <Paper elevation={2} >
          <Box padding={3}>
            <form onSubmit={handleSubmit}>
              <TextField
                type="email"
                name="login"
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Logar
              </Button>
            </form>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LogIn;
