import React, { useState } from 'react';
import { Grid, Paper, IconButton, Button } from '@mui/material';
import MUIDataTable, { MUIDataTableOptions, MUIDataTableColumn } from "mui-datatables";
import { useGetAllInstituicoes } from "../api/useGetAllInstituicoes";
import { refreshToken } from "../api/axiosHelper";
import EditIcon from '@mui/icons-material/Edit';
import AddInstituicaoDialog from './AddInstituicaoDialog'; // Adjust the import path
import { IInstituicoes, IInstituicoesDialog } from '../tipagem/IInstituicoes';
import EditInstituicaoDialog from './EditInstituicaoDialog';

const TabelaBasicaInstituicoes = () => {
  const { data, loading, error, recuperarInstituicoes ,adicionarInstituicoes} = useGetAllInstituicoes();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedInstituicao, setSelectedInstituicao] = useState<IInstituicoesDialog>();

  const handleOpenEditModal = (instituicao: IInstituicoesDialog) => {
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
    adicionarInstituicoes(instituicao)
    console.log('Adding institution:', instituicao);
  };

  const columns: MUIDataTableColumn[] = [
    {
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
    },
    {
      name: 'acoes',
      label: 'Ações',
      options: {
        customBodyRender: (value, tableMeta) => {
          let listaDeCasos = data[tableMeta.rowIndex]; // Get the institution based on the row index
          let instituicaoDialogo :IInstituicoesDialog = {
            siglaInstituicao: listaDeCasos.siglaInstituicao,
            nomeInstituicao: listaDeCasos.nomeInstituicao,
            caminhoEmail: (listaDeCasos.caminhoEmail ===null) ? [""] :listaDeCasos.caminhoEmail.split(",")
          }
          return (
            <IconButton
              size="medium"
              color="primary"
              key={`edit-button-${tableMeta.rowIndex}`}
              onClick={() => handleOpenEditModal(instituicaoDialogo)}
            >
              <EditIcon />
            </IconButton>
          );
        }
      },
    }
  ];



  const options: MUIDataTableOptions = {
    selectableRows: 'none',
    customToolbar: () => {
      return (<Button sx={{ padding: "8" }} variant="contained" onClick={handleOpenModal}>
        Adicionar
      </Button>)
    },
    viewColumns: false,


  };
  React.useLayoutEffect(() => {
    recuperarInstituicoes()
    refreshToken()
  }, [])

  return (
    <>
      <MUIDataTable
        title={'INSTITUIÇÕES'}
        data={data.map((item) => [item.siglaInstituicao, item.nomeInstituicao, "Detalhes/observações", item.caminhoEmail])}
        columns={columns}
        options={options}
      />

      {/* Modal for adding a new institution */}
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
