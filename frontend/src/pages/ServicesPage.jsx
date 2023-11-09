import { 
    Box, Button, Container, Grid, 
    Card, CardActions, CardContent, CardHeader, 
    Typography, Paper
} from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';

import './HomePage.css';

const placeholderServicePackages = [
    {
        title: 'Basic',
        price: '45',
        tierColor: '#479066',
        description: [
            'desc 1',
            'desc 2',
            'desc 3'
        ],
        buttonText: 'Sign up to order',
        buttonVariant: 'outlined',
    },
    {
        title: 'Premium',
        price: '69',
        tierColor: '#C0C0C0',
        description: [
            'desc 1',
            'desc 2',
            'desc 3'
        ],
        buttonText: 'Sign up to order',
        buttonVariant: 'outlined',
    },
    {
        title: 'Golden',
        price: '100',
        tierColor: '#D4AF37',
        description: [
            'desc 1',
            'desc 2',
            'desc 3'
        ],
        buttonText: 'you cant afford this',
        buttonVariant: 'outlined',
    }
]

const frequentlyAskedQuestions = [
    {
        id: 1,
        question: 'question 1',
        answer: 'answer 1'
    },
    {
        id: 2,
        question: 'question 2',
        answer: 'answer 2'
    },
    {
        id: 3,
        question: 'question 3',
        answer: 'answer 3'
    },
]

const ServicesPage = () => {
    return (
        <Container maxwidth="1">
            <Typography variant="h1" display="block" color="secondary" sx={{
                letterSpacing: 2,
                fontSize: {
                    xxs: '12px',
                    xs: '13px',
                    sm: '36px',
                    md: '40px'
                },
                m: 2
            }}>
                Provided services and maintenance
            </Typography>
            <Typography variant="body1" fontSize="18px">
                MITÄ PALVELUPAKETIT OVAT JA MITEN NE TOIMIVAT. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="overline" display="block" color="secondary" sx={{fontWeight: 'bold'}} fontSize="25px" align="center">
                Get your service package now!
            </Typography>
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
                                    titleTypographyProps={{ align: 'center' }}
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
            <Typography 
                sx={{
                    letterSpacing: '.3rem',
                    fontSize: {
                        xxs: '12px',
                        xs: '13px',
                        sm: '36px',
                        md: '40px'
                    },
                    m: 2
                }}>
                    Frequently asked questions
            </Typography>
            <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 4 
                }}
            >
                {frequentlyAskedQuestions.map((faq) => (
                    <Paper elevation={4} key={faq.id}>
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h5" >
                                {faq.question}
                            </Typography>
                            <Typography>
                                {faq.answer}
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Container>
    )
}

export default ServicesPage;