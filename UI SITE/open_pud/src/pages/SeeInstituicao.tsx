import React from 'react';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import TabelaBasicaInstituicoes from '../componentes/TabelaBasicaInstituicoes';
import { getChaveInstituicao, getNomeInstituicao } from '../api/axiosHelper';
import TabelaBasicaDominio from '../componentes/TabelaBasicaDominios';
import TabelaBasicaAdmins from '../componentes/TabelaBasicaAdmins';
import TabelaBasicaGetsores from '../componentes/TabelaBasicaGetsores';

const SeeInstituicao: React.FC = () => {

  return (
    <Grid container >
      <Grid item xs={12} md={10}>
      <Typography variant='h2'>
          {getNomeInstituicao()}
        </Typography>
      </Grid>
      <Grid item xs={3} md={3} paddingTop={3} paddingRight={3}>
        <TabelaBasicaAdmins/>
      </Grid>
      
      <Grid item xs={3} md={3} paddingTop={3} paddingRight={3}>
        <TabelaBasicaGetsores/>
      </Grid>
      
      <Grid item xs={3} md={3} paddingTop={3} paddingRight={3}>
        <TabelaBasicaDominio/>
      </Grid>
      <Grid item xs={12} paddingBottom={3} paddingTop={5}>
        <Divider/>
      </Grid>
      <Grid item xs={12} md={10}>
        <Typography variant='h5'>
          {"Data de cadastro : 14/05"}
        </Typography>
      </Grid> 
    </Grid>
  );
};

export default SeeInstituicao;
