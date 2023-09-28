import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Cabecalho: React.FC = () => {
  return (
    <AppBar position="relative" elevation={1} color='secondary' >
      <Toolbar >
        <Typography variant="h6">Your Website Name</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Cabecalho;
