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
import MultipleSelect from '../../../../Custom_Component/MultipleSelect';
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

export default function UserTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
      <div className='entries1'>
       <div>Show entries</div>
       <div><MultipleSelect name='Associate' size='medium' /></div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell>Name<ArrowDownwardIcon sx={{ fontSize: 15 }} /><ArrowUpwardIcon sx={{ fontSize: 15 }} /></StyledTableCell>
              <StyledTableCell>Phone Number<ArrowDownwardIcon sx={{ fontSize: 15 }} /><ArrowUpwardIcon sx={{ fontSize: 15 }} /></StyledTableCell>
              <StyledTableCell>Email ID<ArrowDownwardIcon sx={{ fontSize: 15 }} /><ArrowUpwardIcon sx={{ fontSize: 15 }} /></StyledTableCell>
              <StyledTableCell></StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {
              props.tabledata.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.Name}
                  </StyledTableCell>
                  <StyledTableCell>{row.mobNumber}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
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