import React, { useEffect, useLayoutEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { cleanToken, request, setInfoToken, setPermissao } from '../api/axiosHelper';
import { IUserSigninRequest } from '../tipagem/IUser';
import { RequestInitialState } from '../constantes/CUser';
import { Box, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import { IInstituicoes } from '../tipagem/IInstituicoes';
import { useGetAllInstituicoes } from '../api/Instituicoes/useGetAllInstituicoes';
import { InstitutoInitialState } from '../constantes/CInstituicoes';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const nav = useNavigate()

  const [formData, setFormData] = useState<IUserSigninRequest>(RequestInitialState);

  const { data: dataInstituicoes, loading: loadingInstituicoes, error: errorInsittuicoes,recuperarInstituicoesAuth } = useGetAllInstituicoes()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    cleanToken()
    setFormData({ ...formData,email:  formData.email + formData.dominio, "login": formData.email + formData.dominio})
    e.preventDefault();
    request(
      "POST",
      "/auth/register",
      { ...formData,email:  formData.email + formData.dominio, "login": formData.email + formData.dominio}
    ).then((res) => {
      setInfoToken(res.data.token)
      setPermissao(res.data.permissao)      
      nav("/principal")
    }
    ).catch((e) => console.log(e)
    )

  };

  useLayoutEffect(() => {
    recuperarInstituicoesAuth()
  }, [])


  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={12} padding={3}>
        <Box  >
          <div className="sign-in">
            <form onSubmit={handleSubmit}>
              <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                <Autocomplete
                  getOptionLabel={(institucao: IInstituicoes) => institucao.siglaInstituicao.toUpperCase() + " - " + institucao.nomeInstituicao.toLocaleUpperCase()}
                  isOptionEqualToValue={(option: IInstituicoes, value: IInstituicoes) => option.id === value.id}
                  onChange={(e, value) => {
                    setFormData({ ...formData, instituicao: (value) ?? InstitutoInitialState });
                  }}
                  fullWidth
                  disablePortal
                  id="instituicao"
                  options={dataInstituicoes}
                  renderInput={(params) => <TextField {...params} label="Instituições" />}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                <TextField
                  type="text"
                  name="email"
                  label="Email"
                  style={{ width: '48%' }} // Adjust the width as needed
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                />
                <Autocomplete
                  getOptionLabel={(option)=>option.domino}
                  disablePortal
                  fullWidth
                  id="combo-box-demo"
                  style={{ width: '48%' }} // Adjust the width as needed
                  options={formData.instituicao.dominiosAcademicos}
                  onChange={(e,value)=>{
                    setFormData({ ...formData, dominio : (value?.domino) ?? '' });
                  }}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Dominio" />}
                  disabled={formData.instituicao === InstitutoInitialState || !formData.email }
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
              <Button type="submit" variant="contained" color="primary" size='large' fullWidth>
                Registrar
              </Button>
            </form>
          </div>
        </Box>

      </Grid>
    </Grid>
  );
};

export default SignIn;
