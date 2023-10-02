import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  IconButton
} from '@mui/material';
import { IInstituicoesDialog } from '../tipagem/IInstituicoes';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface EditInstituicaoDialogProps {
  open: boolean;
  onClose: () => void;
  instituicao: IInstituicoesDialog;
}

const EditInstituicaoDialog: React.FC<EditInstituicaoDialogProps> = ({
  open,
  onClose,
  instituicao
}) => {
  const [editedInstituicao, setEditedInstituicao] = useState<IInstituicoesDialog>(instituicao);
  const [emails, setEmails] = useState<string[]>(instituicao.caminhoEmail || []);

  useEffect(() => {
    setEditedInstituicao(instituicao);
    setEmails(instituicao.caminhoEmail || []);
  }, [instituicao]);

  const handleTextFieldChange = (
    event: any,
    field: keyof IInstituicoesDialog
  ) => {
    const { value } = event.target;
    setEditedInstituicao((prevInstituicao) => ({
      ...prevInstituicao,
      [field]: value
    }));
  };

  const handleAddEmail = () => {
    const lastEmail = emails[emails.length - 1];
    if (isValidEmail(lastEmail)) {
      setEmails([...emails, '']);
    } else {
      alert('Please enter a valid email before adding a new one.');
    }
  };

  const handleRemoveEmail = (index: number) => {
    const updatedEmails = emails.filter((_, i) => i !== index);
    setEmails(updatedEmails);
  };

  const handleUpdateInstituicao = () => {
    const updatedInstituicao: IInstituicoesDialog = {
      ...editedInstituicao,
      caminhoEmail: emails
    };
    console.log('Updating institution:', updatedInstituicao);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editando a instituição</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              fullWidth
              label="Sigla da Instituição"
              name="siglaInstituicao"
              value={editedInstituicao?.siglaInstituicao || ''}
              onChange={(e) => handleTextFieldChange(e, 'siglaInstituicao')}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome da Instituição"
              name="nomeInstituicao"
              value={editedInstituicao?.nomeInstituicao || ''}
              onChange={(e) => handleTextFieldChange(e, 'nomeInstituicao')}
              margin="normal"
            />
          </Grid>          <Grid item xs={12}>
            <div>
              <label>Caminhos do Email:</label>
              {emails.map((email, index) => (
                <div key={index} style={{ display: 'flex' }}>
                  <TextField
                    fullWidth
                    value={email}
                    onChange={(e) => {
                      const updatedEmails = [...emails];
                      updatedEmails[index] = e.target.value;
                      setEmails(updatedEmails);
                    }}
                    margin="normal"
                  />
                  <IconButton
                    edge="end"
                    aria-label="remove-email"
                    onClick={() => handleRemoveEmail(index)}
                    disabled={emails.length === 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
              <Button
                variant="outlined"
                onClick={handleAddEmail}
                color="primary"
                startIcon={<AddIcon />}
              >
                Adicionar Email
              </Button>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleUpdateInstituicao} color="primary">
          Atualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditInstituicaoDialog;
