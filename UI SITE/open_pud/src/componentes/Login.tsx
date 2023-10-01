import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Grid, Paper, Box } from '@mui/material';
import { IUserLoginRequest, IUserResponse, IUserSigninRequest } from '../tipagem/IUser';
import { userLoginInitial } from '../constantes/CUser';
import { cleanToken, refreshToken, request, setInfoToken,  } from '../api/axiosHelper';
import { AxiosError } from 'axios';

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState<IUserLoginRequest>(userLoginInitial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  const handleSubmit = (e: React.FormEvent) => {
    cleanToken()

    e.preventDefault()
    request(
      "POST",
      "/login",
      formData
    ).then((res) => {
      console.log(res.data)
      setInfoToken(res.data.token)
      window.sessionStorage.setItem("userInfo", res.data)
    }).catch((err:AxiosError) => {
    })
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
