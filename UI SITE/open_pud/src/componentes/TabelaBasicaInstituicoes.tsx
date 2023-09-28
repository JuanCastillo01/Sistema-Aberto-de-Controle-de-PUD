import MUIDataTable,{MUIDataTableOptions,MUIDataTableColumn } from "mui-datatables";

const TabelaBasicaInstituicoes = () => {
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
      name: 'campus',
      label: 'Campus',
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

  const data = [
    ['IFCE', 'Instituto Federal de Educação, Ciência e Tecnologia do Ceará', 'Campus Maracanau', 'Insittto tecnico', '@aluno.ifce.edu.br\n@professor.ifce.edu.br', '1' ],
    ['IFCE', 'Instituto Federal de Educação, Ciência e Tecnologia do Ceará', 'Campus Fortaleza', 'Insituto tecnico', '@aluno.ifce.edu.br\n@professor.ifce.edu.br', '1' ],
    ['UFC', 'Universidade Federal do Ceará', 'Campus Fortaleza', 'Ensino Superior', '@aluno.ufc.edu.br\n@professor.ufc.edu.br', '1' ],
    ['UECE', 'Universidade Estadual do Ceará', 'Campus Itaperi', 'Ensino Superior', '@aluno.ufc.edu.br\n@professor.uece.edu.br', '1' ],


    // Add more rows as needed
  ];

  const options : MUIDataTableOptions  = {
    selectableRows: 'none', // or 'multiple' if you want to enable row selection
  };

  return (
    <MUIDataTable
      title={'Exemplo de DataTable'}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default TabelaBasicaInstituicoes;
