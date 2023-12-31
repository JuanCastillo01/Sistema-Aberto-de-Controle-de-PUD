import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import SignIn from '../componentes/Signin';
import LogIn from '../componentes/Login';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const SelecaoUsuario: React.FC = () => {

  const [abaAberta, setAba] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setAba(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={1}>
      <Paper elevation={3} style={{ width: '100%', padding: '60px', margin: '60px', backgroundColor: '#f5f5f5' }}>
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
          <Box marginTop={2}>
            <SignIn />
          </Box>
        )}
        {abaAberta === 1 && (
          <Box marginTop={2}>
            <LogIn />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default SelecaoUsuario;
