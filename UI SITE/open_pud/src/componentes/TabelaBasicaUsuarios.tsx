import { Button, TextField, InputAdornment, IconButton, createTheme, ThemeProvider } from "@mui/material";
import MUIDataTable, { MUIDataTableColumn, MUIDataTableOptions } from "mui-datatables";
import { tabelaOptions, useStylesSearchField } from "./styles/TabelaBasicaStyle";
import { Search } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { IInstituicoes } from "../tipagem/IInstituicoes";

const getMuiTheme = () =>
    createTheme(tabelaOptions);

export const TabelaBasicaUsuarios = () => {

    const [tabela, setTabela] = useState<any[]>([])

    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const [selectedInstituicao, setSelectedInstituicao] = useState<any>();

    const estilos = useStylesSearchField();
    const handleOpenEditModal = (instituicao: IInstituicoes) => {

        setSelectedInstituicao(instituicao);
        setOpenEditModal(true);
    };

    const handleCloseEditModal = () => {
        setOpenEditModal(false);

    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const options: MUIDataTableOptions = {
        textLabels: {
            body: {
                noMatch: "Não há instituições",
            },
            filter: {
                all: "Sem filtro",
                reset: "Limpar",
                title: "Coluna"
            },
            pagination: {
                rowsPerPage: "Instiuições por paginas",
                next: "Proxima",
            }
        },
        selectableRows: 'none',
        download: false,
        viewColumns: false,
        print: false,
        searchAlwaysOpen: true,
        filter: false,
        customToolbar: () => {
            return (<Button sx={{ padding: "8" }} variant="contained" >
                Adicionar
            </Button>)
        },
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
                    return (
                        <IconButton
                            size="medium"
                            color="primary"
                            key={`edit-button-${tableMeta.rowIndex}`}

                        >
                            <EditIcon />
                        </IconButton>
                    );
                }
            },
        }
    ];
    return (
        <>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    options={options} columns={columns} data={[]} title={"Usuarios"} />
            </ThemeProvider>
        </>
    )
}