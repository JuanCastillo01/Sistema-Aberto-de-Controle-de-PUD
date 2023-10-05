import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; 
import { ListItem, ListItemIcon } from '@mui/material';
import { systemModules } from '../constantes/constantesGerais';
import { styled } from '@mui/material/styles';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#001F3F', // Dark navy blue background color
    color: '#ffffff', // Text color
    width: '300px', // Adjust the width of the drawer
  },
}));

const Menu: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleItemClick = (path: string) => {
    navigate(path); // Use the navigate function to change the route
  };

  const getLista = () => {
    return systemModules.map((item, index) => (
      <ListItem 
        key={index}
        button
        onClick={() => handleItemClick(item.path)}
        style={{ fontSize: '2rem' }} // Adjust the font size of the ListItem
      >
        <ListItemIcon  style={{ color: "white", fontSize: '3.5rem', paddingRight: '16px' }}>
          {item.icone}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h4" style={{ fontSize: '2rem' }}>
              {item.name}
            </Typography>
          }
        />
      </ListItem>
    ));
  };

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <List>{getLista()}</List>
    </StyledDrawer>
  );
};

export default Menu;
