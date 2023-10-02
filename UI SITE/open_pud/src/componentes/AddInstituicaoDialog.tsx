import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';
import { IInstituicoes, IInstituicoesDialog } from '../tipagem/IInstituicoes';

interface AddInstituicaoDialogProps {
    open: boolean;
    onClose: () => void;
    onAdd: (instituicao: IInstituicoes) => void;
}

const initialInsititucaoDialogState ={
    siglaInstituicao: '',
    nomeInstituicao: '',
    caminhoEmail: [''],
}

const emailPathRegex: RegExp = /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isEmailValid = (email: string): boolean => {
  return emailPathRegex.test(email);
};
const AddInstituicaoDialog: React.FC<AddInstituicaoDialogProps> = ({ open, onClose, onAdd }) => {
    const [instituicao, setInstituicao] = useState<IInstituicoesDialog>(initialInsititucaoDialogState);

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInstituicao((prevInstituicao) => ({
            ...prevInstituicao,
            [name]: value,
        }));
    };

    const handleAddInstituicao = () => {
        const areFieldsEmpty = Object.values(instituicao).some((field) => field === '');
        if(areFieldsEmpty){
            alert("'Por favor, completa todos los campos.'")
        }
        else{
            let obj: IInstituicoes = {
                caminhoEmail: instituicao.caminhoEmail.toString(),
                nomeInstituicao: instituicao.nomeInstituicao,
                siglaInstituicao: instituicao.siglaInstituicao
    
            }
            onAdd(obj);
            onClose();
            setInstituicao(initialInsititucaoDialogState)
        }
    };
    const handleCancelInstituicao = () => {
        onClose();
        setInstituicao(initialInsititucaoDialogState)
    }
    const handleCaminhoEmailChange = (index: number, value: string) => {
        
        const updatedCaminhosEmail = [...instituicao.caminhoEmail];
        updatedCaminhosEmail[index] = value;
        setInstituicao((prevInstituicao) => ({
            ...prevInstituicao,
            caminhoEmail: updatedCaminhosEmail,
        }));
    };

    const handleAddCaminhoEmail = () => {
        const lastEmailPath = instituicao.caminhoEmail[instituicao.caminhoEmail.length - 1];
        if (lastEmailPath && lastEmailPath.trim() !== '') {
            setInstituicao((prevInstituicao) => ({
                ...prevInstituicao,
                caminhoEmail: [...prevInstituicao.caminhoEmail, ''],
            }));
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle style={{ backgroundColor: '#001F3F', color: 'white' }}>Adicionar uma nova instituição</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            label="Sigla da Instituição"
                            name="siglaInstituicao"
                            value={instituicao.siglaInstituicao}
                            onChange={handleTextFieldChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            label="Nome da Instituição"
                            name="nomeInstituicao"
                            value={instituicao.nomeInstituicao}
                            onChange={handleTextFieldChange}
                            margin="normal"
                        />
                    </Grid>
                        {instituicao.caminhoEmail.map((caminho: any, index: number) => (
                            <Grid item xs={12} key={index}>
                                <TextField
                                    fullWidth
                                    label={`Caminho do Email ${index + 1}`}
                                    value={caminho}
                                    onChange={(e) => handleCaminhoEmailChange(index, e.target.value)}
                                    margin="normal"

                                />
                            </Grid>
                        ))}
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            onClick={handleAddCaminhoEmail}
                            color="primary"
                            disabled={instituicao.caminhoEmail.length ===  0 || !emailPathRegex.test(instituicao.caminhoEmail[instituicao.caminhoEmail.length - 1].trim())}
                        >
                            Adicionar Caminho do Email  
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleCancelInstituicao} color="primary">
                    Cancelar
                </Button>
                <Button variant="contained" onClick={handleAddInstituicao} color="primary">
                    Criar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddInstituicaoDialog;
