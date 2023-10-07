import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import SignIn from '../componentes/Signin';
import LogIn from '../componentes/Login';
import Box from '@mui/material/Box';

const PaginaInicial: React.FC = () => {
  const [abaAberta, setAba] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setAba(newValue);
  };

  return (
    <main style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    
      }}>
      <Paper elevation={3} style={{ width: '80%', padding: '30px', backgroundColor: '#f5f5f5' }}>
        <Tabs
          value={abaAberta}
          onChange={handleChange}
          aria-label="User selection tabs"
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Registrar" style={{ fontSize: '2rem' }} />
          <Tab label="Entrar" style={{ fontSize: '2rem' }} />
        </Tabs>
        {abaAberta === 0 && (
          <Box marginTop={1}>
            <SignIn />
          </Box>
        )}
        {abaAberta === 1 && (
          <Box marginTop={1}>
            <LogIn />
          </Box>
        )}
      </Paper>
    </main>
  );
};

export default PaginaInicial;
    