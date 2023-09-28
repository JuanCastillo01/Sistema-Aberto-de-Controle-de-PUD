import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom'; 
import { ListItem, ListItemIcon } from '@mui/material';
import { systemModules } from '../constantes/constantesGerais';

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
      >
        <ListItemIcon>{item.icone}</ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItem>
    ));
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <List>{getLista()}</List>
    </Drawer>
  );
};

export default Menu;
