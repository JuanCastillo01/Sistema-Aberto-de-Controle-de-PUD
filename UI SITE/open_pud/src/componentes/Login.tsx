import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { redirect, useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { IUserLoginRequest } from '../tipagem/IUser';
import { userLoginInitial } from '../constantes/CUser';
import { cleanToken, request, setInfoToken, setPermissao } from '../api/axiosHelper';
import { AxiosError } from 'axios';

const LogIn: React.FC = () => {
  const nav = useNavigate()

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
      setInfoToken(res.data.token)
      setPermissao(res.data.permissao)      
      nav("/principal")

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
