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
import {Link as Routerlink} from "react-router-dom";
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const defaultTheme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Routerlink color="inherit" to="/">
        UbuntuTech
      </Routerlink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Servicerequest() {
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
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          <Button href="/" variant="text" color="inherit" sx={{ my: 1, mx: 2.5 }}>
            Procurelink
          </Button>
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
          <Button href="/login" variant="contained" sx={{ my: 1, mx: 2.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ height: '2rem' }} />

    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Service Request information 
      </Typography>
      <Box sx={{ height: '1rem' }} />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title of service"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="location"
            name="location"
            label="Location"
            fullWidth
            autoComplete="shipping address-line1"
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
      </TreeItem>
      <TreeItem nodeId="10" label="Car Services">
        <TreeItem nodeId="11" label="Mechanic services" />
        <TreeItem nodeId="12" label="Towing services" />
      </TreeItem>
    </TreeView>
    <Grid item xs={12} sm={6}>
          <TextField
            required
            id="servicetype"
            name="servicetype"
            label="Service type (choose one from dropdown list)"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="servicedate"
            name="servicedate"
            label="Date of service (YYYY-MM-DD)"
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
      <Button variant="contained" href="/Quotationlist">Confirm</Button>
    </Stack>
    </React.Fragment>
    <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

  );
}