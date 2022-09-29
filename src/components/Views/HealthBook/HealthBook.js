import React, { useState } from 'react'
import '../../style/healthbook.css'
import { Button, Box } from '@mui/material';
import Table from './Table/HealthBookTable'
import tabledata from './Table/data';
import CustomizedDialogs from '../../../Custom_Component/CustomizedDialogs';
import Category from './Form/CategoryForm';
import TestForm from './Form/TestForm';

function HealthBook() {
  console.log(localStorage.getItem('token'));
  const [open, setOpen] = useState(false);
  const [box, setBox] = useState({
    item: '',
    header: ''
  });
  const handleClickOpen = (item, text) => {
    console.log(text);
    setBox(prev => { return { ...prev, item: item, header: text } });
    setOpen(true);
  };

  return (
    <>
      <div className="add-test">
        <CustomizedDialogs open={open} setOpen={setOpen} box={box} />
      </div>

      <div className="healthbox">
        <Box>
          <Button variant="contained" className='btn add' onClick={() => handleClickOpen(<Category />, 'Category')}>Create Category</Button>
          <Button variant="contained" className='btn add' onClick={() => handleClickOpen(<TestForm />, 'Medical Test')}>Add Test</Button>
          <h3>Health Book</h3>
          <p>Dashboard / <span>Health Book</span></p>

        </Box>
       
        <Table tabledata={tabledata} />

      </div>
    </>
  )
}

export default HealthBook