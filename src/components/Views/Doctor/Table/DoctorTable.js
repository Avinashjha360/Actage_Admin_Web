import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TablePagination from '@mui/material/TablePagination';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : 'green',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'red',
      boxSizing: 'border-box',
    },
  }));
  
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

export default function DoctorTable(props) {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>

            <StyledTableCell>Doctor Name <ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/> </StyledTableCell>
            <StyledTableCell>Speciality<ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/></StyledTableCell>
            <StyledTableCell>Location<ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/></StyledTableCell>
            <StyledTableCell>Contact Number<ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/></StyledTableCell>
            <StyledTableCell>Status<ArrowDownwardIcon sx={{ fontSize: 15 }}/><ArrowUpwardIcon sx={{ fontSize: 15 }}/></StyledTableCell>
            <StyledTableCell></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.tabledata.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
            .map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.doctorName}
                </StyledTableCell>
                <StyledTableCell>{row.speciality}</StyledTableCell>
                <StyledTableCell>{row.location}</StyledTableCell>
                <StyledTableCell>{row.contactNumber}</StyledTableCell>
                <StyledTableCell align='center'>
                <AntSwitch defaultChecked={row.status==='active'} inputProps={{ 'aria-label': 'ant design' }}/> 
                </StyledTableCell>
                <StyledTableCell><img src="images/Eye.png" alt="logo" /></StyledTableCell>
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
  );
}