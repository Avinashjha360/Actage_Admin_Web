import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageItem from './ImageItem';
import { Button } from '@mui/material';
import MultipleSelect from '../../../Custom_Component/MultipleSelect';

function AppImage() {
  return (
    <>
    <div className="healthbox">
        <Box>
            <h3>App Image</h3>
            <p>Dashboard / <span>App Image</span></p>
        </Box>
    </div>
    <div className='entries2'>
    <MultipleSelect name='App Name' size='medium' />
    <MultipleSelect name='Image Type' size='medium' />
    <Button variant="contained" size='small'>Serach</Button>
    <Button variant="contained" size='small'>Add</Button>
    </div>
    <Box sx={{ flexGrow:1,p:5  }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <ImageItem />
            </Grid>
            <Grid item xs={4}>
                <ImageItem />
            </Grid>
            <Grid item xs={4}>
                <ImageItem />
            </Grid>
            <Grid item xs={4}>
                <ImageItem />
            </Grid>
        </Grid>
    </Box>
</>
  )
}

export default AppImage