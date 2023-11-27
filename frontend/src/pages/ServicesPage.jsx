import { 
  Box, Button, Card, CardActions, 
  CardContent, CardHeader, Container,
  Grid, Paper, Typography
} from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';
import { Link } from 'react-router-dom';

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
      <Typography 
        variant="h1" 
        display="block" 
        color="#3D3D3D"
        sx={{
          letterSpacing: 2,
          fontSize: {
            xs: '20px',
            sm: '36px',
            md: '40px'
          },
          fontWeight: 'medium',
          m: 4
        }}
      >
        OUR SERVICES / MAINTENANCE
      </Typography>
      <Grid container direction="row" spacing={10} style= {{ paddingBottom: '65px' }}> 
        <Grid item xs={8} md={6}>
          <img 
            src="https://grid-is.imgix.net/dsdarrenyawgcg/486e8010-1294-4cdf-85f7-c21ee78aff95-pexels-tima-miroshnichenko-6614747.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Typography 
            variant="h6"
            color="#3D3D3D"
            align="center"
            sx={{
              fontWeight: 'medium', 
              letterSpacing: 2 
            }}
          >
            DESIGNING AND IMPLEMENTATION
          </Typography>
        </Grid>
        <Grid item xs={8} md={6}>
          <img 
            src="https://myhomebusters.com/wp-content/uploads/2023/09/the-Social-Benefits-of-Gardening.webp"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          /> 
          <Typography 
            variant="h6"
            color="#3D3D3D"
            align="center"
            sx={{
              fontWeight: 'medium', 
              letterSpacing: 2 
            }}
          >
            MAINTENANCE SERVICE
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2} alignItems="center"> 
        <Grid item xs={8} md={6} align="center">
          <Typography
            variant="h6"
            color="#3D3D3D"
            align="center"
            sx={{
              fontWeight: 'medium', 
              letterSpacing: 2 
            }}
          >
            DESIGN AND IMPLEMENTATION
          </Typography>
          <Typography paragraph>
            We specialize in crafting individual, one-of-a-kind designs for your chosen spaces,
            tailored to your unique vision. Our skilled team can work closely with you, ensuring 
            your input shapes every leaf and petal, or you can simply entrust us with the entire 
            process. From concept to creation, we're here to bring your green oasis to reality.
            Let's make your green dreams flourish!       
          </Typography>
          <Button variant="contained" size="large">BOOK</Button>
        </Grid>
        <Grid item xs={8} md={6}>
          <img
            src="https://images.pexels.com/photos/4621652/pexels-photo-4621652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2} alignItems="center"> 
        <Grid item xs={8} md={4}>
          <img 
            src="https://kodintuntu.fi/wp-content/uploads/2022/02/pexels-valeria-ushakova-3094208-1024x1536.jpg.webp"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={8} md={6} align="center">
          <Typography
            variant="h6"
            color="#3D3D3D"
            align="center"
            sx={{
              fontWeight: 'medium', 
              letterSpacing: 2 
            }}
          >
            MAINTENANCE
          </Typography>
          <Typography paragraph>
            Beyond design and implementation, we're your partner in lasting beauty. Choose from our 
            maintenance plans, tailored to your preference - weekly, monthly, or as you desire. We'll
            care for your chosen plants and flowers, ensuring they thrive and flourish. Your green space,
            your terms. Let us keep your oasis in full bloom.
          </Typography>
        </Grid>
      </Grid>
      <Typography 
        component="h1" variant="h2" align="center"
        color="text.primary" gutterBottom
      >
        Pricing
      </Typography>
      {/* Pricing */}
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
                <GrassIcon 
                  sx={{ 
                    borderRadius: 3,
                    fontSize: 40,
                    display: { md: 'flex' },
                    mr: 1,
                    color: service.tierColor
                  }} 
                />
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
                    {/* Button takes you to the Sign up -page */}
                    <Link to="/signUp">{service.buttonText}</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Frequently asked questions */}
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
        }}
      >
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