import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';
import { IInstituicoes } from '../tipagem/IInstituicoes';
import { useAddInstituicoes } from '../api/useAddInstituicoes';

interface AddInstituicaoDialogProps {
    open: boolean;
    onClose: () => void;
    onAdd: (instituicao: IInstituicoes) => void;
}

const initialInsititucaoDialogState :IInstituicoes={
    id: null,
    siglaInstituicao: '',
    nomeInstituicao: '',
    dominiosAcademicos: [{
        id: null,
        domino: "",
    }],
}

const emailPathRegex: RegExp = /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isEmailValid = (email: string): boolean => {
  return emailPathRegex.test(email);
};
const AddInstituicaoDialog: React.FC<AddInstituicaoDialogProps> = ({ open, onClose, onAdd }) => {
    const postOne = useAddInstituicoes();

    const [instituicao, setInstituicao] = useState<IInstituicoes>(initialInsititucaoDialogState);

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInstituicao((prevInstituicao) => ({
            ...prevInstituicao,
            [name]: value,
        }));
    };

    const handleAddInstituicao = () => {
        const areFieldsEmpty = Object.values(instituicao).some((field) => field === '');

        if (areFieldsEmpty) {
            alert("'Por favor, preencha todos los campos.'");
        } else {
            postOne.adicionarInstituicoes(instituicao)
                .then(() => {
                    setInstituicao(initialInsititucaoDialogState);
                    onClose();
                })
                .catch((error) => {
                    console.error('Error adding institution:', error);
                });
        }
    };
    
    const handleCancelInstituicao = () => {
        onClose();
        setInstituicao(initialInsititucaoDialogState)
    }
    const handleCaminhoEmailChange = (index: number, value: string) => {
        
        const updatedCaminhosEmail = [...instituicao.dominiosAcademicos];
        updatedCaminhosEmail[index] = {id:null, domino: value};
        setInstituicao((prevInstituicao) => ({
            ...prevInstituicao,
            dominiosAcademicos: updatedCaminhosEmail,
        }));
    };

    const handleAddCaminhoEmail = () => {
        const lastEmailPath = instituicao.dominiosAcademicos[instituicao.dominiosAcademicos.length - 1];
        if (lastEmailPath && lastEmailPath.domino.trim() !== '') {
            setInstituicao((prevInstituicao) => ({
                ...prevInstituicao,
                dominiosAcademicos: [...prevInstituicao.dominiosAcademicos, {id:null, domino: ""}],
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
                        {instituicao.dominiosAcademicos.map((caminho: any, index: number) => (
                            <Grid item xs={12} key={index}>
                                <TextField
                                    fullWidth
                                    label={`Caminho do Email ${index + 1}`}
                                    value={caminho.domino}
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
                            disabled={instituicao.dominiosAcademicos.length ===  0 || !emailPathRegex.test(instituicao.dominiosAcademicos[instituicao.dominiosAcademicos.length - 1].domino.trim())}
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
