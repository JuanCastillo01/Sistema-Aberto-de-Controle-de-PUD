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
import { IDominios, IInstituicoes } from '../tipagem/IInstituicoes';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Console } from 'console';
import { useEditInstituicoes } from '../api/Instituicoes/useEditInstituicoes';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface EditInstituicaoDialogProps {
  open: boolean;
  onClose: () => void;
  instituicao: IInstituicoes;
}

const EditInstituicaoDialog: React.FC<EditInstituicaoDialogProps> = ({
  open,
  onClose,
  instituicao
}) => {
  
  const [editedInstituicao, setEditedInstituicao] = useState<IInstituicoes>(instituicao);
  const [dominios, setDominios] = useState<IDominios[]>(instituicao.dominiosAcademicos);

  const editInst = useEditInstituicoes()

  useEffect(() => {
    setEditedInstituicao(instituicao);
    setDominios(instituicao.dominiosAcademicos);
  }, [instituicao]);

  const handleTextFieldChange = (
    event: any,
    field: keyof IInstituicoes
  ) => {
    const { value } = event.target;
    setEditedInstituicao((prevInstituicao) => ({
      ...prevInstituicao,
      [field]: value
    }));
  };

  const handleAddEmail = () => {
    const lastEmail = dominios[dominios.length - 1];
    if (isValidEmail(lastEmail.domino)) {
      setDominios([...dominios, {id:null, domino:''}]);
    } else {
      alert('Please enter a valid email before adding a new one.');
    }
  };

  const handleRemoveEmail = (index: number) => {
    const updatedEmails = dominios.filter((_, i) => i !== index);
    setDominios(updatedEmails);
  };

  const handleUpdateInstituicao = () => {
    const updatedInstituicao: IInstituicoes = {
      ...editedInstituicao,
      dominiosAcademicos: dominios
    };
    
    editInst.editarInstituicoes(updatedInstituicao)
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
              {dominios.map((doms, index) => (
                <div key={index} style={{ display: 'flex' }}>
                  <TextField
                    fullWidth
                    value={doms.domino}
                    onChange={(e) => {
                      const updatedEmails = [...dominios];
                      updatedEmails[index] = { 
                        id : (dominios.filter(d=>d.id === doms.id).length === 1) ? doms.id : null,  
                        domino: e.target.value};
                      setDominios(updatedEmails);
                    }}
                    margin="normal"
                  />
                  <IconButton
                    edge="end"
                    aria-label="remove-email"
                    onClick={() => handleRemoveEmail(index)}
                    disabled={dominios.length === 1}
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
