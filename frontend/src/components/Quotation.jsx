import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" to="/">
          UbuntuTech
        </Link>{' '}
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

const service = [
  {
    name: 'Main Service',
    desc: 'A description of service required',
    price: '232,19 ALGO',
  },
  {
    name: 'Additional service',
    desc: 'Additional service request',
    price: '69,65 ALGO',
  },
  {
    name: 'Additional service',
    desc: 'Additional specific requirement',
    price: '32,50 ALGO',
  },
  {
    name: 'Network cost',
    desc: '',
    price: '16,71 ALGO',
  },
  
  { name: 'Service Delivery', desc: '', price: 'Free' },
];

const addressfrom = ['2 hackathon Road', 'winnerville', 'Pretoria', 'Gauteng', '0342', 'South Africa'];
const addressto = ['1 UCT Drive', 'Hackaville', 'Cape Town', 'Western Cape', '0234', 'South Africa'];
const payments = [
  { name: 'Address', detail: 'hb45JJ8Bgs91djkw86VBdbbj2' },
  { name: 'Amount to pay', detail: '583,05 ALGO ' },
  { name: '', detail: '= R1255,38' },
  { name: 'Service date', detail: '14/07/2023' },
];

export default function Quotation() {
  return (
    <React.Fragment>
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
            
          </Toolbar>
        </AppBar>

        <Box sx={{ height: '2rem' }} />

      <Typography variant="h5" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {service.map((service) => (
          <ListItem key={service.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={service.name} secondary={service.desc} />
            <Typography variant="body2">{service.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            583,05 ALGO
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Service from
          </Typography>
          <Typography gutterBottom>Service Provider company name</Typography>
          <Typography gutterBottom>{addressfrom.join(', ')}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Service to
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addressto.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
             
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>   
      <Box sx={{ height: '2rem' }} />
    <Stack spacing={2} direction="row">
      <Button variant="outlined" href="/bookings">back</Button>
      <Button variant="contained" href="#">Confirm</Button>
    </Stack>
    </ThemeProvider>
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
  </React.Fragment>
  
  );
}