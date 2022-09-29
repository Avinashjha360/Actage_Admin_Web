import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default function AddCategory() {
  return (
    <>

        <Grid container sx={{ p: { xs: 5, m: 10 } }}>
          <Grid item xs={12}>
            <TextField
              id="categoryName"
              name="categoryName"
              label="Category"
              autoComplete="given-name"
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