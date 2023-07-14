import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link as Routerlink} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';

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

const defaultTheme = createTheme();



export default function Quotationcreate() {
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
            <Stack direction="row" spacing={2}>
              <Avatar alt="Plogo" src="./Plogo.png" />
            </Stack>
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
          </Toolbar>
        </AppBar>
        {/* Main */}
       
    <React.Fragment>
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt:8, pb: 12 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Quotation
        </Typography>
      </Container>

      <Box sx={{ height: '1rem' }} />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fromWhom"
            name="fromWhom"
            label="From Whom"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
         </Grid>
         
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rate"
            name="rate"
            label="Price of service"
            fullWidth
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
            multiline rows={6}
          />
        </Grid>

         <Box sx={{ height: '14rem' }} />

    </Grid>

    <Stack spacing={2} direction="row">
      <Button variant="outlined" href="/">back</Button>
      <Button variant="contained" href="/quotation">Confirm</Button>
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
    )
}