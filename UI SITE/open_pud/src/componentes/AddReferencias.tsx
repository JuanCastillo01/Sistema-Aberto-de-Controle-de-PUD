import { Paper, Typography, ToggleButtonGroup, ToggleButton, TextField, Grid, Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { IReferenciasLivro } from "../tipagem/IReferencias";
import { referenciaLivroInitial } from "../constantes/CReferencias";

const useStyles: any = makeStyles({
    toggleButton: {
        color: '#ffffff'
    }
});

const AddReferencias = () => {
    const classes = useStyles();

    const isNumRegex = /^[0-9]*$/;
    const [tipoReferencia, setTipoReferencia] = React.useState<string | null>("livro")
    const [referenciaLivro, setReferenciaLivro] = React.useState<IReferenciasLivro>(referenciaLivroInitial)

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        setTipoReferencia(newAlignment)
        console.log(tipoReferencia)
    };

    const handleChange = (field: string, value: string) => {
        setReferenciaLivro({
            ...referenciaLivro,
            [field]: value
        });
    };

    const anoPublicacaoHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let anoPublicacao = e.target.value
        if (isNumRegex.test(anoPublicacao) && anoPublicacao.length <= 4) {
            setReferenciaLivro({
                ...referenciaLivro,
                anoPublicacao
            });
        }
        console.log(referenciaLivro)
    }

    const adicionarOnClick = () => {
        switch (tipoReferencia) {
            case "livro":
                // Api.post("",
                //     referenciaLivro
                // ).then(

                // ).catch();
                break;
            case "capLivro":
                break;
            case "artigo":
                break;
        }
    }

    return (
        <>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} padding={2}>
                    <Paper variant="outlined" style={{ padding: '5px', backgroundColor: '#858494' }}>
                        <Grid item xs={12} padding={1}>
                            <Typography style={{ color: '#ffffff' }}>Tipo de referência:</Typography>
                            <ToggleButtonGroup
                                value={tipoReferencia}
                                exclusive
                                onChange={handleAlignment}
                                aria-label="text alignment"
                                fullWidth
                            >
                                <ToggleButton value="livro" aria-label="left aligned" style={{ color: '#ffffff' }}>
                                    Livro
                                </ToggleButton>
                                <ToggleButton value="caplivro" aria-label="centered" style={{ color: '#ffffff' }}>
                                    Cap. de livro
                                </ToggleButton>
                                <ToggleButton value="artigo" aria-label="right aligned" style={{ color: '#ffffff' }}>
                                    Artigo
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            {(tipoReferencia === "livro") ?
                <>
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={12} padding={2}>
                            <TextField
                                type="text"
                                name="titulo"
                                label="Título"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => handleChange('titulo', e.target.value)}
                                value={referenciaLivro.titulo}
                            />
                        </Grid>
                        <Grid item xs={6} padding={2}>
                            <TextField
                                type="text"
                                name="autor"
                                label="Autor"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => handleChange('autoria', e.target.value)}
                                value={referenciaLivro.autoria}
                            />
                        </Grid>
                        <Grid item xs={6} padding={2}>
                            <TextField
                                type="text"
                                name="editora"
                                label="Editora"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => handleChange('editora', e.target.value)}
                                value={referenciaLivro.editora}
                            />
                            <TextField
                                type="text"
                                name="local"
                                label="Local"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => handleChange('local', e.target.value)}
                                value={referenciaLivro.local}
                            />
                            <TextField
                                type="text"
                                name="anoPublicacao"
                                label="Ano de Publicação"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={anoPublicacaoHandleChange}
                                value={referenciaLivro.anoPublicacao}
                            />
                        </Grid>
                        <Grid item xs={12} padding={2}>
                            <Paper variant="elevation" style={{ padding: '5px', backgroundColor: '#ffffff' }}>
                                <Grid item xs={12} padding={3}>
                                    <Typography padding={1}>Previsão de Referência</Typography>
                                    <Typography padding={1}>
                                        Título: {referenciaLivro.titulo}
                                    </Typography>
                                    <Typography padding={1}>
                                        Autoria: {referenciaLivro.autoria}
                                    </Typography>
                                    <Typography padding={1}>
                                        Editora: {referenciaLivro.editora}
                                    </Typography>
                                    <Typography padding={1}>
                                        Local: {referenciaLivro.local}
                                    </Typography>
                                    <Typography padding={1}>
                                        Ano de Publicação: {referenciaLivro.anoPublicacao}
                                    </Typography>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </>
                : null
            }
            <Grid container justifyContent="flex-end">
                <Grid item xs={1.75} padding={3}>
                    <ButtonGroup>
                        <Button variant="contained" onClick={adicionarOnClick}>
                            Adicionar
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </>
    );
}

export default AddReferencias;