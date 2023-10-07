import { Search } from '@mui/icons-material';
import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables';
import React from 'react';
import { useStylesSearchField } from '../componentes/styles/TabelaBasicaStyle';
import { TabelaBasicaUsuarios } from '../componentes/TabelaBasicaUsuarios';


const ManterUsuarios: React.FC = () => {
  
  return (<>
    <TabelaBasicaUsuarios/>
  </>
  );
};

export default ManterUsuarios;
