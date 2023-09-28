import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SignIn from '../componentes/Signin';
import LogIn from '../componentes/Login';
import Paper from '@mui/material/Paper/Paper';
import { Typography } from '@mui/material';

const SelecaoUsuario: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
  <>
    <Typography variant='h3' align="center" style={{ textDecoration: 'underline' }}>Selecione seu Usuario</Typography>
    <Paper variant="outlined" style={{ padding: '5px', backgroundColor: '#f0f0f0' }}>
      <Tabs 
        value={value} 
        aria-label="User selection tabs" 
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth" >
        <Tab label="Registrar" onClick={(e) => handleChange(e, 0)} style={{ fontSize: '1.5rem' }}/>
        <Tab label="Acessar" onClick={(e) => handleChange(e, 1)} style={{ fontSize: '1.5rem' }}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignIn />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LogIn />
      </TabPanel>
    </Paper>
  </>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default SelecaoUsuario;
