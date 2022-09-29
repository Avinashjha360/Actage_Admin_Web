import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


export default function AddQualification() {
  return (
    <>
    <Grid container sx={{ '& .MuiTextField-root': { m: 1, }, pt: { xs: 2, m: 20 }, p: 3, width: "45ch" }}>
    
      <Grid item xs={12}>
        <TextField
          className="inputRounded"
          variant="outlined"
          size="small"
          label="Qualification"
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