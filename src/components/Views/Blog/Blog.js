import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material'
import BlogItem from './BlogItem';
import MultipleSelect from '../../../Custom_Component/MultipleSelect';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Blog() {
    return (
        <>
            <div className="healthbox">
                <Box>
                    <h3>Blog</h3>
                    <p>Dashboard / <span>Blog</span></p>
                </Box>
            </div>
            <div className='entries2'>
            <MultipleSelect name='Empower' size='medium' />
            <Button variant="contained" size='small'>Add</Button>
            <MultipleSelect name='Empower' size='medium' />
            <Button variant="contained" size='small'>Add</Button>
            </div>
            <Box sx={{ flexGrow:3,p:2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item><BlogItem /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><BlogItem /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><BlogItem /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><BlogItem /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><BlogItem /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><BlogItem /></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Blog