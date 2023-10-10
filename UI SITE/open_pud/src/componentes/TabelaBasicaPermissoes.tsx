import React from 'react';
import { TableBody, TableContainer, Paper, Table, TableRow, TableCell, TableHead } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tableCell: {
    border: '1px solid #ddd', // Border style for the cells
    padding: '8px', // Padding for the cells
    textAlign: 'left', // Adjust alignment as needed
  },
  headerCell: {
    backgroundColor: 'navy',
    color: 'white !important' , // Set text color to white for header cells
    border: '1px solid #ddd', // Border style for the header cell
    padding: '8px',
    textAlign: 'left',
  },
});

const TabelaBasicaPermissoes = () => {
  const classes = useStyles();

  const dominios: string[][] = [["ModuloA", "Pode"], ["ModuloB", "Pode"]];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell}>Modulo</TableCell>
            <TableCell className={classes.headerCell}>Limitantes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dominios.map((row, index) => (
            <TableRow key={index}>
              <TableCell className={classes.tableCell}>
                {row[0]}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {row[1]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TabelaBasicaPermissoes;
