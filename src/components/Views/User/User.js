import React, { useState } from 'react'
import '../../style/healthbook.css'
import { Button, Box } from '@mui/material';
import Table from './Table/UserTable'
import tabledata from './Table/data';
import CustomizedDialogs from '../../../Custom_Component/CustomizedDialogs';

import TestForm from './Form/TestForm';

function User() {

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
                    <Button variant="contained" className='btn add' onClick={() => handleClickOpen(<TestForm />, 'Medical Test')}>Add New</Button>
                    <h3>User</h3>
                    <p>Dashboard/ <span>User</span></p>

                </Box>
              
                <Table tabledata={tabledata} />

            </div>
        </>
    )
}

export default User