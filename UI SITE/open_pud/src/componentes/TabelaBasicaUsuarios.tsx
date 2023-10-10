import { Button, TextField, InputAdornment, IconButton, createTheme, ThemeProvider } from "@mui/material";
import MUIDataTable, { MUIDataTableColumn, MUIDataTableOptions } from "mui-datatables";
import { tabelaOptions, useStylesSearchField } from "./styles/TabelaBasicaStyle";
import { Delete, Engineering, EngineeringRounded, Search } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { useGetAllUsuarios } from "../api/AdmUsuarios/useGetAllUsuarios";
import { getPermissao } from "../api/axiosHelper";
import React from "react";
import { IAdmUsuario } from "../tipagem/IUser";
import EditAcessoDialog from "./EditAcessoDialog";
import DeleteAcessoDialog from "./DeleteAcessoDialog";

const getMuiTheme = () =>
    createTheme(tabelaOptions);

export const TabelaBasicaUsuarios = () => {
    const getAll = useGetAllUsuarios();


    const [tabela, setTabela] = useState<any[]>([])

    const [dialogoAcessoAberto, setDialogoAcessoAberto] = useState(false);
    const [dialogoDeletarAberto, setDialogoDeletarAberto] = useState(false);

    const [usuarioSelecionado, setUsuarioSelecionado] = useState<IAdmUsuario>();

    const estilos = useStylesSearchField();
    
    
    const handleAbrirModalAcesso = (user: IAdmUsuario) => {   
        setUsuarioSelecionado(user);
        setDialogoAcessoAberto(true);
    };
    
    const handleFecharModalAcesso = () => {
        setDialogoAcessoAberto(false);
        
    };
    
    const handleAbrirModalDeletar = (user:IAdmUsuario) => {
        setUsuarioSelecionado(user)
        setDialogoDeletarAberto(true)
    }
    const handleFecharModalDeletar =() =>{
        setDialogoDeletarAberto(false)
    }

    const options: MUIDataTableOptions = {
        textLabels: {
            body: {
                noMatch: "Não há usuarios",
            },
            filter: {
                all: "Sem fil tro",
                reset: "Limpar",
                title: "Coluna"
            },
            pagination: {
                rowsPerPage: "Usuario por paginas",
                next: "Proxima",
            }
        },
        selectableRows: 'none',
        download: false,
        viewColumns: false,
        print: false,
        searchAlwaysOpen: true,
        filter: false,
        
        customSearchRender: (searchText, handleSearch, hideSearch, options) => {
            return (<>
                <TextField
                    className={estilos.searchField}
                    size='small'
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
                                    <Search style={{ color: 'white' }} />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onClick={() => handleSearch(searchText)}
                                    aria-label="search"
                                    >
                                    <Search style={{ color: 'white' }} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Pesquisar"
                    value={searchText}
                />

            </>)
        },
        
        
        
    };
    const columns: MUIDataTableColumn[] = [
        {
            name: 'id',
            label: 'Chave',
            options: {
                display: 'excluded'
            }
            
        },
        {
            name: 'email',
            label: 'Email',
        },
        {
            name: 'permissoes',
            label: 'Grupos de acesso',
        },
        {
            name: 'dataCriacao',
            label: 'Data de Crição',
        },
        {
            name: 'acoes',
            label: 'Ações',
            options: {
                customBodyRender: (value, tableMeta) => {
                    return (<>
                        <IconButton
                            size="medium"
                            color="primary"
                            key={`edit-button-${tableMeta.rowIndex}`}
                            onClick={() => handleAbrirModalAcesso(getAll.data.filter(intTemp => intTemp.id === tabela[tableMeta.rowIndex][0])[0])}
                            >
                            <Engineering />
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="primary"
                            key={`delet-button-${tableMeta.rowIndex}`}
                            onClick={() => handleAbrirModalDeletar(getAll.data.filter(intTemp => intTemp.id === tabela[tableMeta.rowIndex][0])[0])}
                            >
                            <Delete />
                        </IconButton>
                            </>
                        
                    );
                }
            },
        }
    ];

    React.useLayoutEffect(() => {
        if(getPermissao() === "ADMINISTRATOR_DO_SISTEMA"){
            getAll.getAllUsuarios()
        }else{
            getAll.getAllUsuariosPorInstituicao(1)
        }
      }, [])

    React.useEffect(() => {
        if(!getAll.loading){
            setTabela(getAll.data.map((usuario : IAdmUsuario)=>[ usuario.id, usuario.email, usuario.permissao, "14/05"]))
        }
      },[getAll.data])
    return (
        <>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    options={options} columns={columns} data={tabela} title={"Usuarios"} />
            </ThemeProvider>
            {usuarioSelecionado &&
                     <DeleteAcessoDialog open={dialogoDeletarAberto} onClose={handleFecharModalDeletar} usuario={usuarioSelecionado}/>}
            {usuarioSelecionado &&
                     <EditAcessoDialog open={dialogoAcessoAberto} onClose={handleFecharModalAcesso} usuario={usuarioSelecionado}/>}
        </>
    )
}