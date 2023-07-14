import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "react-router-dom";


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
     </ThemeProvider>
    )
}