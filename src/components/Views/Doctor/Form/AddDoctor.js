import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
export default function CategoryForm() {
  return (
    <>
      <Grid container sx={{ '& .MuiTextField-root': { m: 1, }, pt: { xs: 2, m: 20 }, p: '1rem', width: "45ch" }}>
        <Grid item xs={12} sx={{alignItem:"center" ,p:"20px 0px 20px 100px"}}>
          <Button
            variant="contained"
            component="label"
            sx={{background:"white",border:'1px solid gray' ,borderRadius:"100px",width:"18ch",height:"18ch"}}
          >
            Upload Image
            <input
              type="file"
              hidden
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="inputRounded"
            variant="outlined"
            size="small"
            label="User ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="inputRounded"
            variant="outlined"
            size="small"
            label="Full Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="inputRounded"
            variant="outlined"
            size="small"
            label="Gender"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            className="inputRounded"
            variant="outlined"
            size="small"
            label="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="inputRounded"
            variant="outlined"
            size="small"
            label="Specialization"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="inputRounded"
            variant="outlined"
            size="small"
            label="Consultation Fees"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="inputRounded"
            variant="outlined"
            size="small"
            label="Location"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
        <Button autoFocus variant="contained"  sx={{m: { xs: 3, md: 3 } }}>
            Submit
          </Button> 
        </Grid>
      </Grid>

    </>
  );
}
