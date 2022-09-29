import React,{useState} from 'react'
import '../..//style/healthbook.css'
import { Button } from '@mui/material';
import Table from './Table/DoctorTable';
import tabledata from './Table/data';
import CustomizedDialogs from '../../../Custom_Component/CustomizedDialogs';
import AddDoctor from './Form/AddDoctor';
import AddSpeciality from './Form/AddSpeciality'
import AddQualification from './Form/AddQualification';
function Doctor() {
  const [open, setOpen] = useState(false);
  const [box, setBox] = useState({
    item:'',
    header:''
  });
  const handleClickOpen = (item,header) => {
    setBox(prev =>{ return  {...prev, item:item,header:header}});
    setOpen(true);
  };
  return (
    <div className="healthbox">
       <CustomizedDialogs open={open} setOpen={setOpen} box={box}/>
          <div>
          <Button variant="contained" className='btn add' onClick={()=>handleClickOpen(<AddQualification/>,'Qualification')}>Add Qualificaion</Button>
          <Button variant="contained" className='btn add' onClick={()=>handleClickOpen(<AddSpeciality/>,'Specialization')}>Add Speciality</Button>
          <Button variant="contained" className='btn add' onClick={()=>handleClickOpen(<AddDoctor/>,'Doctor')}>Add Doctor</Button>
            <h3>Doctors list</h3>
            <p>Dashboard/ <span>Doctors</span></p>
          </div>
          <div className='entries'>
                   <div>Show entries</div>
          </div>
          <Table tabledata={tabledata} />
        </div>
  )
}

export default Doctor