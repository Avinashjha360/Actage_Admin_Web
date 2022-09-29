import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TablePagination from '@mui/material/TablePagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F8F9FA',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage,props.tabledata.length-page*rowsPerPage);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell>Test Name<ArrowDownwardIcon sx={{ fontSize: 15 }} /><ArrowUpwardIcon sx={{ fontSize: 15 }} /></StyledTableCell>
              <StyledTableCell>Test Min Value<ArrowDownwardIcon sx={{ fontSize: 15 }} /><ArrowUpwardIcon sx={{ fontSize: 15 }} /></StyledTableCell>
              <StyledTableCell>Test Max Value<ArrowDownwardIcon sx={{ fontSize: 15 }} /><ArrowUpwardIcon sx={{ fontSize: 15 }} /></StyledTableCell>
              <StyledTableCell>Measurement Unit<ArrowDownwardIcon sx={{ fontSize: 15 }} /><ArrowUpwardIcon sx={{ fontSize: 15 }} /></StyledTableCell>
              <StyledTableCell>Result Type<ArrowDownwardIcon sx={{ fontSize: 15 }} /><ArrowUpwardIcon sx={{ fontSize: 15 }} /></StyledTableCell>
              <StyledTableCell></StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {
              props.tabledata.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.testName}
                  </StyledTableCell>
                  <StyledTableCell>{row.minValue}</StyledTableCell>
                  <StyledTableCell>{row.maxValue}</StyledTableCell>
                  <StyledTableCell>{row.measurementUnit}</StyledTableCell>
                  <StyledTableCell>{row.resultType}</StyledTableCell>
                  <StyledTableCell align='center'>
                    <Button variant="contained" className='edit'>edit</Button>
                    <Button variant="contained" className="delete">delete</Button></StyledTableCell>
                </StyledTableRow>
              ))
            }
            {
              emptyRows > 0 &&
                <StyledTableRow style={{height:58*emptyRows}}>
                  <StyledTableCell colSpan={6} />
                </StyledTableRow>
              
            }
          </TableBody>
        </Table>
        <TablePagination
        component="div"
        count={props.tabledata.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5,10,15]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </TableContainer>
     
    </>
  );
}