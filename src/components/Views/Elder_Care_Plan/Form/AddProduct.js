import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button } from '@mui/material';

export default function AddProduct() {
  return (
    <>
  
        <Grid container spacing={3} sx={{ pt: { xs: 2, m: 5 } }}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="productName"
              name="productName"
              label="Product Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={1} disabled>Product Category</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={1} disabled>Currency</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="subscriptionExpires"
              name="subscriptionExpires"
              label="Subscription Expires"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="maximumValue"
              name="maximumValue"
              label="Maximum Value"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
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