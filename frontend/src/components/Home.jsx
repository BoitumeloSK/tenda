import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import {Link as Routerlink} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


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

const tiers = [
  {
    title: 'About ProcureLink',
    description: ['ProcureLink is a revolutionary app that connects users with a wide range of services and simplifies the process of booking and managing those services. Whether you need professional assistance or want to explore new experiences, ProcureLink has got you covered.',
      ],
    buttonText: 'Browse Services',
    buttonVariant: 'outlined',
  },
  
];

const Grid2 = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const content = (
  <div>
    {`ProcureLink streamlines the service booking process. 
    By using ProcureLink, you can save time and effort by easily browsing and booking services online. 
    The platform provides a diverse selection of service providers, ensuring that you find the perfect fit for your needs. 
    ProcureLink also offers personalized customization options, allowing you to tailor your service bookings to your specific requirements. With a convenient booking tracking feature, you can easily monitor the status of your bookings and stay informed. Experience seamless service provision with ProcureLink and enjoy the convenience and peace of mind it brings.`}
  </div>
);

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

export default function Home() {
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
              href="./Servicerequest"
              underline='hover'
              sx={{ my: 1, mx: 1.5 }}
            >
              Booking
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="https://wallet.myalgo.com/new-account"
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
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt:8, pb: 12 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to ProcureLink 
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        The leading platform for streamlined public procurement. Connect with service providers, discover lucrative contracts, and propel your business forward. 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // About ProcureLink card is full width at sm breakpoint
            
            
              <Card sx={{ maxWidth: 2000 }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                  }}
                />
                <CardContent>
                  <Box 
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} href='/services'>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
          ))}
        </Grid>
      </Container> 

      <Box sx={{ height: '7rem' }} />

      <Container maxWidth="lg" disableGutters component="main" >
      <Typography component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom >
         How ProcureLink works
      </Typography>
      <Box sx={{ height: '2rem' }} />
      <Grid2 container>
      <Divider orientation="vertical" flexItem>
        1.Sign up
      </Divider>
      <Grid2 item xs>
        <p>Create an account to access all features and services.</p>
      </Grid2>
      <Divider orientation="vertical" flexItem>
        2.Browse Services
      </Divider>
      <Grid2 item xs>
        <p>Explore the diverse range of services available.</p>
      </Grid2>
      <Divider orientation="vertical" flexItem>
        3.Create Booking
      </Divider>
      <Grid2 item xs>
        <p>Personalize your booking with specific requirements.</p>
      </Grid2>
      <Divider orientation="vertical" flexItem>
        4.Track Bookings
      </Divider>
      <Grid2 item xs>
        <p>Stay updated with the status of your bookings.</p>
      </Grid2>
      <Divider orientation="vertical" flexItem>
        5.Enjoy The Experience
      </Divider>
      <Grid2 item xs>
        <p>Have a seamless and enjoyable service experience.</p>
      </Grid2>
    </Grid2>
    </Container>
    
    <Box sx={{ height: '4rem' }} />

    <Root>
    <Container maxWidth="lg" disableGutters component="main" >
    <Box sx={{ height: '4rem' }} />
      <Divider>
        <Chip label="More about Procurelink" />
      </Divider>
      {content}
      </Container>
    </Root>
      {/* Footer */}
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
      {/* End footer */}
    </ThemeProvider>
  );
}