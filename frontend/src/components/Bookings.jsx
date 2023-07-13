import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "react-router-dom";

const defaultTheme = createTheme();

export default function Booking() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={7}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            ProcureLink
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/services"
              underline='hover'
              sx={{ my: 1, mx: 1.5 }}
            >
              Services
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="./Bookings"
              underline='hover'
              sx={{ my: 1, mx: 1.5 }}
            >
              Booking
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              underline='hover'
              sx={{ my: 1, mx: 1.5 }}
            >
              Wallet
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              underline='hover'
              sx={{ my: 1, mx: 1.5 }}
            >
              Profile
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              underline='hover'
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
            
          </nav>
          <Button to="/login" variant="contained" sx={{ my: 1, mx: 2.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Booking information 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
          />
        </Grid>

      <Box sx={{ height: '6rem' }} />

      <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 70, flexGrow: 2, maxWidth: 400, overflowY: "visible", }}
    >
      <TreeItem nodeId="1" label="Home Services">
        <TreeItem nodeId="2" label="Gardening services" />
        <TreeItem nodeId="3" label="Plumbing services" />
        <TreeItem nodeId="4" label="Painting services" />
        <TreeItem nodeId="4" label="Cleaning services" />
      </TreeItem>
      <TreeItem nodeId="5" label="Business Services">
        <TreeItem nodeId="6" label="Financial services" />
        <TreeItem nodeId="7" label="IT services" />
        <TreeItem nodeId="8" label="Operational services" />
        <TreeItem nodeId="9" label="Marketing services" />
      </TreeItem>
      <TreeItem nodeId="10" label="Car Services">
        <TreeItem nodeId="11" label="Mechanic services" />
        <TreeItem nodeId="12" label="Tyre services" />
        <TreeItem nodeId="13" label="Towing services" />
      </TreeItem>
    </TreeView>
    <Grid item xs={12} sm={6}>
          <TextField
            required
            id="servicetype"
            name="servicetype"
            label="Service type (choose one from list above)"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="servicedate"
            name="servicedate"
            label="Date (YYYY-MM-DD)"
            fullWidth
            autoComplete="date"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="description"
            name="description"
            label="Description of service required"
            fullWidth
            autoComplete="description"
            variant="outlined"
            multiline rows={4}
          />
        </Grid>
     <Box sx={{ height: '10rem' }} />
        
    </Grid>

    <Stack spacing={2} direction="row">
      <Button variant="outlined" href="/">back</Button>
      <Button variant="contained" href="/quotation">Confirm</Button>
    </Stack>
    </React.Fragment>
    </ThemeProvider>

  );
}