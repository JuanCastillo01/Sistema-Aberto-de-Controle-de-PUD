import React, { useState } from 'react';
import { IconButton, Button, createTheme, ThemeProvider, InputAdornment, TextField } from '@mui/material';
import MUIDataTable, { MUIDataTableOptions, MUIDataTableColumn } from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import AddInstituicaoDialog from './AddInstituicaoDialog';
import { IInstituicoes } from '../tipagem/IInstituicoes';
import EditInstituicaoDialog from './EditInstituicaoDialog';
import { Search } from '@mui/icons-material';
import { tabelaOptions, useStylesSearchField } from './styles/TabelaBasicaStyle';
import { useGetAllInstituicoes } from '../api/Instituicoes/useGetAllInstituicoes';

const getMuiTheme = () =>
  createTheme(tabelaOptions);
const TabelaBasicaInstituicoes = () => {
  const getAll = useGetAllInstituicoes();

  const [tabela,setTabela] = React.useState<any[]>([]) 

  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedInstituicao, setSelectedInstituicao] = useState<IInstituicoes>();

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

  const handleAddInstituicao = (instituicao: IInstituicoes) => {    
    console.log('Adding institution:', instituicao);
  };

  const columns: MUIDataTableColumn[] = [
    {
      name: 'id',
      label: 'Chave',
      options:{
        display:'excluded'
      }

    },{
      name: 'abrev',
      label: 'Abreviação',

    },
    {
      name: 'nomeCompleto',
      label: 'Nome Completo',
    },

    {
      name: 'detalhes',
      label: 'Detalhes',
    },
    {
      name: 'email',
      label: 'Email',
      options: {
        
      }
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
              onClick={() => handleOpenEditModal(getAll.data.filter(intTemp => intTemp.id === tabela[tableMeta.rowIndex][0])[0])}
            >
              <EditIcon />
            </IconButton>
          );
        }
      },
    }
  ];

  const options: MUIDataTableOptions = {
    textLabels:{
      body:{ 
        noMatch: "Não há instituições",
      },
      filter: {
        all: "Sem filtro",
        reset: "Limpar",
        title: "Coluna"
      },
      pagination:{
        rowsPerPage: "Instiuições por paginas",
        next: "Proxima",
      }
    },  
    selectableRows: 'none',
    download: false,
    viewColumns: false,
    print: false,
    searchAlwaysOpen: true,
    filter:false,
    customToolbar: () => {
      return (<Button sx={{ padding: "8" }} variant="contained" onClick={handleOpenModal}>
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
                  <Search style={{ color: 'white' }}/>
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
  React.useLayoutEffect(() => {
    getAll.recuperarInstituicoes()
  }, [])

  React.useEffect(() => {
    if(!getAll.loading){
      setTabela(getAll.data.map((e:IInstituicoes) => [e.id,e.siglaInstituicao, e.nomeInstituicao, "Detalhe", (e.dominiosAcademicos.length === 0) ? "vazio" : e.dominiosAcademicos.map(caminho=>`${caminho.domino} \n`)]))
    }
  },[getAll.data])

  return (
    <>
      <ThemeProvider theme={getMuiTheme()}>

        <MUIDataTable
          title={'INSTITUIÇÕES'}
          data={tabela}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
      <AddInstituicaoDialog open={openModal} onClose={handleCloseModal} onAdd={handleAddInstituicao} />
      {selectedInstituicao && (
        <EditInstituicaoDialog
          open={openEditModal}
          onClose={handleCloseEditModal}
          instituicao={selectedInstituicao}
        />
      )}
    </>
  );
};

export default TabelaBasicaInstituicoes;
