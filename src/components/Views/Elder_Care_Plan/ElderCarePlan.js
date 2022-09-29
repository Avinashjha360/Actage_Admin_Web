import React, { useState } from 'react'
import '../..//style/healthbook.css'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Table from './Table/ElderCareTable';
import { tabledata1 } from './Table/data';
import CustomizedDialogs from '../../../Custom_Component/CustomizedDialogs';
import AddService from './Form/AddService';
import AddCategory from './Form/AddCategory';
import AddProduct from './Form/AddProduct';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function ElderCarePlan() {
  const [open, setOpen] = useState(false);
  const [box, setBox] = useState({
    item:'',
    header:''
  });
  const handleClickOpen = (item,header) => {
    setBox(prev =>{ return  {...prev, item:item,header:header}});
    setOpen(true);
  };
  const products = ['Flexi Care', 'Care 360'];

  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="healthbox">
      <CustomizedDialogs open={open} setOpen={setOpen} box={box} />
      <div>
        <Button variant="contained" className='btn add' onClick={() => handleClickOpen(<AddCategory />,'Category')}>Add Category</Button>
        <Button variant="contained" className='btn add' onClick={() => handleClickOpen(<AddProduct />,'Product')}>Add Product</Button>
        <Button variant="contained" className='btn add' onClick={() => handleClickOpen(<AddService />,'Service')}>Add Service</Button>
        <h3>Product</h3>
        <p>Dashboard/ <span>Product</span></p>
      </div>
      <div>
        <div>
          {products.map((item, index) => {
            return (
              <Accordion onChange={handleChange('panel')} key={index}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>{item}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Table tabledata={tabledata1} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default ElderCarePlan