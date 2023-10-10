import { TableBody, TableContainer, Paper, Table, TableRow, TableCell, TableHead } from "@mui/material"

const TabelaBasicaDominio = () => {
    const dominios = ["AAAA","BBB"]
    const headerCellStyle = {
        backgroundColor: 'navy',
        color: 'white',
      };
    
    return (
    <TableContainer component={Paper}>
      <Table>
      <TableHead>
          <TableRow>
            <TableCell style={headerCellStyle}>Endereços de email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dominios.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
} 
export default TabelaBasicaDominio