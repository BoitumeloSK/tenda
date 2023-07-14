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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

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


export default function Singleservice() {
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
        {/* main */}
       <Container disableGutters maxWidth="sm" component="main" sx={{ pt:8, pb: 12 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Service Requested
        </Typography>
        
      </Container>

    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
      <Typography gutterBottom variant="h6" component="div">
          Title:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brief title of service offering
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Service Type:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type of service offered
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Description:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description of service offering
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Location:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location of service offering
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Price:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Proposed price of service 
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Service Date:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date in which service is booked
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="medium" href ="/Services">Back to Browse</Button>
        <Button size="medium" href ="#">Confirm request</Button>
      </CardActions>
    </Card>




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