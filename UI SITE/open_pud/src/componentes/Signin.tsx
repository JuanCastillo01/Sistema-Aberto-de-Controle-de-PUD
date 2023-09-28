import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { request, setAuthToken } from '../api/axiosHelper';
import { IUserSigninRequest } from '../tipagem/IUser';
import { RequestInitialState } from '../constantes/CUser';
import { Box, Grid, Paper } from '@mui/material';

const SignIn: React.FC = () => {

  const [formData, setFormData] = useState<IUserSigninRequest>(RequestInitialState);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ formData })
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    setFormData({ ...formData, "login": formData.email })
    e.preventDefault();
    request(
      "POST",
      "/register",
      { ...formData, "login": formData.email }
    ).then((res) => {
      setAuthToken(res.data.token)
      window.sessionStorage.setItem("userInfo", res.data)
    }
    ).catch(e => console.log(e))

  };


  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={6} padding={3}>
        <Paper elevation={2} >
          <Box padding={3}>
            <div className="sign-in">
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="nomeUsuario"
                label="Usuario"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                type="email"
                name="email"
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
                Registrar
              </Button>
            </form>
          </div>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignIn;
