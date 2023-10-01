import MUIDataTable,{MUIDataTableOptions,MUIDataTableColumn } from "mui-datatables";
import { useGetAllInstituicoes } from "../api/useGetAllInstituicoes";
import { useLayoutEffect } from "react";
import React from "react";
import { refreshToken } from "../api/axiosHelper";

const TabelaBasicaInstituicoes = () => {
  const {data, loading, error, recuperarInstituicoes, adicionarInstituicoes}  = useGetAllInstituicoes()
  const columns : MUIDataTableColumn[] = [
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
      name: 'numeroUsuarios',
      label: 'Nº Usuarios',
    },
    {
      name: 'acoes',
      label: 'Ações',
    },
  ];

  const dataMock = [
    ['IFCE', 'Instituto Federal de Educação, Ciência e Tecnologia do Ceará', 'Campus Maracanau', 'Insittto tecnico', '@aluno.ifce.edu.br\n@professor.ifce.edu.br', '1' ],
    ['IFCE', 'Instituto Federal de Educação, Ciência e Tecnologia do Ceará', 'Campus Fortaleza', 'Insituto tecnico', '@aluno.ifce.edu.br\n@professor.ifce.edu.br', '1' ],
    ['UFC', 'Universidade Federal do Ceará', 'Campus Fortaleza', 'Ensino Superior', '@aluno.ufc.edu.br\n@professor.ufc.edu.br', '1' ],
    ['UECE', 'Universidade Estadual do Ceará', 'Campus Itaperi', 'Ensino Superior', '@aluno.ufc.edu.br\n@professor.uece.edu.br', '1' ],


    // Add more rows as needed
  ];

  const options : MUIDataTableOptions  = {
    selectableRows: 'none', // or 'multiple' if you want to enable row selection
  };
  React.useLayoutEffect(()=>{
    recuperarInstituicoes()
    refreshToken()
  },[])

  return (
    <MUIDataTable
      title={'Exemplo de DataTable'}
      data={data.map((item)=>[item.siglaInstituicao,item.nomeInstituicao,"Detalhes/observações", item.caminhoEmail, ])}
      columns={columns}
      options={options}
    />
  );
};

export default TabelaBasicaInstituicoes;


