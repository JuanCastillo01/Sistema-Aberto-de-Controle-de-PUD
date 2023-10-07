import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, redirect } from 'react-router-dom';
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
      "/auth/login",
      formData
    ).then((res) => {
      console.log(res.data)
      setInfoToken(res.data.token)
      window.sessionStorage.setItem("userInfo", res.data)
    }).catch((err:AxiosError) => {
    }).finally((()=>redirect("/principal")))
  };

  return (
    <Grid container justifyContent={'center'} >
      <Grid item xs={12} padding={3}>
          <Box >
            <form onSubmit={handleSubmit}>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>


              <TextField
                type="email"
                name="login"
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                />
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>


              <TextField
                type="password"
                name="password"
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                />
                </Box>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Logar
              </Button>
            </form>
          </Box>
      </Grid>
    </Grid>
  );
};

export default LogIn;
