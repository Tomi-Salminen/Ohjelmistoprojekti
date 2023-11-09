import { 
    Box, Button, Container, Grid, 
    Card, CardActions, CardContent, CardHeader, 
    Typography 
} from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';

import './HomePage.css';

const placeholderServicePackages = [
    {
        title: 'Basic',
        price: '45',
        tierColor: '#479066',
        description: [
            'house visits',
            'watering',
            'maintenance'
        ],
        buttonText: 'Sign up to order',
        buttonVariant: 'outlined',
    },
    {
        title: 'Premium',
        price: '69',
        tierColor: '#C0C0C0',
        description: [
            'house visits',
            'more watering',
            'maintenance'
        ],
        buttonText: 'Sign up to order',
        buttonVariant: 'outlined',
    },
    {
        title: 'Golden',
        price: '100',
        tierColor: '#D4AF37',
        description: [
            'house visits',
            'even more watering',
            'strategic surveillance'
        ],
        buttonText: 'you cant afford this',
        buttonVariant: 'outlined',
    }
]

const ServicesPage = () => {
    return (
        <Container maxwidth="1">
            <Typography sx={{
                letterSpacing: '.3rem',
                fontSize: {
                    xxs: '12px',
                    xs: '13px',
                    sm: '36px',
                    md: '40px'
                }
            }}>
                Provided services and maintenance
            </Typography>
            <Typography variant="overline" display="block" color="secondary" sx={{fontWeight: 'bold'}} fontSize="16px">
                Get your service package now!
            </Typography>
            <p>MITÄ PALVELUPAKETIT OVAT JA MITEN NE TOIMIVAT. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {/* Tästä alkaa koodiesimerkki hinnastosta!*/}
            <Typography 
                component="h1" variant="h2" align="center"
                color="text.primary" gutterBottom
            >
                Pricing
            </Typography>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {placeholderServicePackages.map((service) => (
                        <Grid
                            item
                            key={service.title}
                            xs={12}
                            sm={service === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                            <GrassIcon sx={{ borderRadius: 3, fontSize: 40, display: { md: 'flex' }, mr: 1, color: service.tierColor }} />
                                <CardHeader
                                    title={service.title}
                                    subHeader={service.subHeader}
                                    titleTypographyProps={{ align: 'center '}}
                                    subHeaderTypographyProps={{ align: 'center' }}
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
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {service.price} €
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /mo
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {service.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={service.buttonVariant}>
                                        {service.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
    {/* Tähän päättyy koodiesimerkki hinnastosta */}
            <Typography 
                sx={{
                    letterSpacing: '.3rem',
                    fontSize: {
                        xxs: '12px',
                        xs: '13px',
                        sm: '36px',
                        md: '40px'
                    }
                }}>
                    Frequently asked questions
            </Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Container>
    )
}

export default ServicesPage;