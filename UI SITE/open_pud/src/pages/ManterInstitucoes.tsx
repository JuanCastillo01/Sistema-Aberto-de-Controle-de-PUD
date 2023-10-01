import React from 'react';
import { Grid, Paper } from '@mui/material';
import TabelaBasicaInstituicoes from '../componentes/TabelaBasicaInstituicoes';

const ManterInstitucoes: React.FC = () => {

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={10}>
        <Paper>

          <TabelaBasicaInstituicoes />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ManterInstitucoes;
