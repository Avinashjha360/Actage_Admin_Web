import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button,Box } from '@mui/material'
import MedicalDetail from './MedicalDetail';
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
        field: 'gender',
        headerName: 'Gender',
        description: 'This column has a value getter and is sortable.',
        sortable: true,
        width: 100,
    },
    {
        field: 'orderDate',
        headerName: 'Order Date',
        description: 'This column has a value getter and is sortable.',
        sortable: true,
        width: 130,
    },

    {
        field: 'contactNumber',
        headerName: 'Contact Number',
        description: 'This column has a value getter and is sortable.',
        sortable: true,
        width: 130,
    },
];

const rows = [
    { id: 1, lastName: 'Jha', firstName: 'Avinash', orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
    { id: 6, lastName: 'Melisandre', firstName: null, orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', orderDate: '1994-01-01', gender: 'Male', contactNumber: '921213219' },
];

const assignrows = [];
assignrows.push(rows[0]);
assignrows.push(rows[1]);

export default function DataTable() {
    return (
        <>
            <div className='medicine'>
                <div style={{ height: 500, width: '70%'}}>
                <div className='entries1'>
                        <h4>Customer's Detail</h4>
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
                <div className="detail">
                    <MedicalDetail />
                </div>


            </div>
        </>
    );
}