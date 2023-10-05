import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

interface HeaderProps {
  headerText: string; // New prop for header text
}

const Header: React.FC<HeaderProps> = ({ headerText }) => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#78909C', top: 0, width: '100%' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        
        <Typography  variant="h3" color="inherit" style={{   padding: '20px',paddingLeft: '350px' }}>
          {headerText}
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
