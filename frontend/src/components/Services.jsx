import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useState, useEffect } from "react";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" to="/home">
				UbuntuTech
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

export default function Services() {

	const [services, setServices] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getServices = async () => {
			try {
				const getMethod = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				};
				fetch("api/requests", getMethod)
					.then((response) => response.json())
					.then((result) => {
						console.log(result.data);
						setServices(result.data);
						setIsLoading(false);
					});
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		};
		getServices();
	});
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!services) {
		return <div>No data found.</div>;
	}
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<HomeIcon sx={{ mr: 3 }} fontSize="medium" />
					<Typography variant="h6" color="default" noWrap>
						Procurelink Services
					</Typography>
					<nav>
						<Link
							variant="button"
							color="text.primary"
							href="/services"
							underline="hover"
							sx={{ my: 1, mx: 1.5 }}
						>
							Services
						</Link>
						<Link
							variant="button"
							color="text.primary"
							href="./Bookings"
							underline="hover"
							sx={{ my: 1, mx: 1.5 }}
						>
							Booking
						</Link>
						<Link
							variant="button"
							color="text.primary"
							href="#"
							underline="hover"
							sx={{ my: 1, mx: 1.5 }}
						>
							Wallet
						</Link>
						<Link
							variant="button"
							color="text.primary"
							href="#"
							underline="hover"
							sx={{ my: 1, mx: 1.5 }}
						>
							Profile
						</Link>
						<Link
							variant="button"
							color="text.primary"
							href="#"
							underline="hover"
							sx={{ my: 1, mx: 1.5 }}
						>
							Support
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "background.paper",
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="text.primary"
							gutterBottom
						>
							Services
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="text.secondary"
							paragraph
						>
							Discover the power of ProcureLink - your gateway to simplified
							public procurement. Easily discover a wide range of service
							offerings tailored to your specific needs.
						</Typography>
						<Stack
							sx={{ pt: 0 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						></Stack>
					</Container>
				</Box>
				<Container sx={{ py: 8 }} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{services.map((card, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardMedia
										component="div"
										sx={{
											// 16:9
											pt: "56.25%",
										}}
										image={card.image}
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant="h5" component="h2">
											{card.serviceType}
										</Typography>
										<Typography>{card.title}</Typography>
									</CardContent>
									<CardActions>
										<Button size="small">Browse</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					ProcureLink
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					ProcureLink: Empowering Success, One Contract at a Time!
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}

