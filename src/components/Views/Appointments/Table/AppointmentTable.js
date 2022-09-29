import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AppointmentDetail from './AppointmentDetail';
import MultipleSelect from '../../../../Custom_Component/MultipleSelect';   

const columns = [
    {
        field: 'Name',
        headerName: 'Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 145,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'specialization',
        headerName: 'Specialization',
        description: 'This column has a value getter and is sortable.',
        sortable: true,
        width: 120,
    },
    {
        field: 'dob',
        headerName: 'D.O.B',
        description: 'This column has a value getter and is sortable.',
        sortable: true,
        width: 100,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        description: 'This column has a value getter and is sortable.',
        sortable: true,
        width: 100,
    },
    {
        field: 'fee',
        headerName: 'Fee',
        description: 'This column has a value getter and is sortable.',
        sortable: true,
        width: 100,
    },
];

const rows = [
    { id: 1, lastName: 'Jha', firstName: 'Avinash', specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
    { id: 6, lastName: 'Melisandre', firstName: null, specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', specialization: 'Neuro', dob: '1994-01-01', gender: 'Male', fee: '1 INR' },
];

const assignrows = [];
assignrows.push(rows[0]);
assignrows.push(rows[1]);

export default function DataTable() {
    return (
        <>
            <div className='medicine'>
                <div style={{ height: 500, width: '70%' }}>
                <div className='entries1'>
                        <h4>Doctor's Profile</h4>
                        <MultipleSelect name="Served" size='small'/>
                       
                    </div>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
                <div className='detail'>
                    <AppointmentDetail />
                </div>
            </div>
        </>

    );
}
