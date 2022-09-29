import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'Name',
        headerName: 'Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 230,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'mobNumber',
        headerName: 'Mobile No.',
        description: 'This column has a value getter and is sortable.',
        sortable: true,
        width: 140,
    }
];

const rows = [
    { id: 1, lastName: 'Jha', firstName: 'Avinash', mobNumber: '9876789272' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', mobNumber: '9874789272' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', mobNumber: '9876819271' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', mobNumber: '9876789222' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', mobNumber: '7876789272' },
    { id: 6, lastName: 'Melisandre', firstName: null, mobNumber: '9876589272' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', mobNumber: '9846789272' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', mobNumber: '9834789272' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', mobNumber: '9876785272' },
];

const assignrows = [];
assignrows.push(rows[0]);
assignrows.push(rows[1]);

export default function DataTable() {
    return (
        <>
            <div className='grid-container'>
                <div className='grid-item'>
                    <div style={{ height: 600,width:'90%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>
                <div className='grid-item'>
                    <div style={{ height: 600,width:'100%'  }}>
                        <DataGrid
                            rows={assignrows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>

                </div>
            </div>

        </>

    );
}
