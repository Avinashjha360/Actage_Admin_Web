import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

  
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

function ElderCareTable(props) {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Product Name <ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/> </StyledTableCell>
          <StyledTableCell>Speciality<ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/></StyledTableCell>
          <StyledTableCell>Location<ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/></StyledTableCell>
          <StyledTableCell>Contact Number<ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/></StyledTableCell>
          <StyledTableCell>Edit<ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/></StyledTableCell>
          <StyledTableCell></StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {
          props.tabledata.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.doctorName}
              </StyledTableCell>
              <StyledTableCell>{row.speciality}</StyledTableCell>
              <StyledTableCell>{row.location}</StyledTableCell>
              <StyledTableCell>{row.contactNumber}</StyledTableCell>
              <StyledTableCell><img src="images/edit.png" alt="logo" /></StyledTableCell>
              <StyledTableCell><img src="images/Eye.png" alt="logo" /></StyledTableCell>
            </StyledTableRow>
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ElderCareTable