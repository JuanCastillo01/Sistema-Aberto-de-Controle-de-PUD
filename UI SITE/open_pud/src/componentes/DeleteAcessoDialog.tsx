// DeleteAcessoDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { IAdmUsuario } from '../tipagem/IUser';


interface DeleteInstituicaoDialogProps {
  open: boolean;
  onClose: () => void;
  usuario: IAdmUsuario;
}

const DeleteAcessoDialog: React.FC<DeleteInstituicaoDialogProps> = ({ open, onClose, usuario }) => {
  const handleDelete = () => {

    console.log('Deleting user:', usuario);
    onClose(); // Close the dialog after handling the delete
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete User</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the user?
          <br />
          User Details:
          <br />
          Login: {usuario.login}
          <br />
          Email: {usuario.email}
          <br />
          Permissao: {usuario.permissao}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAcessoDialog;
