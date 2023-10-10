import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { IAdmUsuario } from '../tipagem/IUser';
import { DialogActions, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { listaPermissoes } from '../constantes/CPermission';
interface EditInstituicaoDialogProps {
    open: boolean;
    onClose: () => void;
    usuario : IAdmUsuario;
  }
const EditAcessoDialog = ({open,onClose,usuario} : EditInstituicaoDialogProps) => {
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  return (

    <Dialog open={open} onClose={onClose}>
      <DialogTitle fontSize={28}>Alterar permissão de acesso do Usuário</DialogTitle>
      <DialogContent style={{ paddingBottom: '20px' }}>
        <DialogContentText>
        <Typography variant="subtitle1" fontSize={20}>
            Detalhes do Usuario:
          </Typography>
          <Typography variant='body1' fontSize={18} gutterBottom>
            Email: {usuario.email}
          </Typography>
        </DialogContentText>
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          fullWidth
          variant="outlined"
          label="Select an option"
          style={{ marginBottom: '20px' }}
        >
          {listaPermissoes.map((permissao, index) => (
            <MenuItem key={index} value={permissao || ''}>
              {permissao || 'Vazio'}
            </MenuItem>
          ))}
        </Select>
      </DialogContent>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <Button variant='outlined' onClick={onClose} color="primary" style={{ marginRight: '10px' }}>
          Cancelar
        </Button>
        <Button variant='outlined' onClick={onClose} color="primary">
          Confirmar
        </Button>
      </div>
    </Dialog>
  
  );
};

export default EditAcessoDialog;
