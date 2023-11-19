import { Grid, Box, Typography, Stack } from '@mui/material';
import aboutUsImg from '../images/aboutUs.jpg';

const AboutPage = () => {
    return (
        <div style={{paddingTop: "40px"}}>
            <Grid container spacing={8}>
                <Grid item sm={12} lg={7}>
                        <Typography variant="button"
                                    sx={{color: '#183c25', textTransform: "uppercase", fontSize: "24px", letterSpacing: "2px", paddintTop: "-10px", display: "flex", justifyContent: "center"}}>
                            ABOUT US
                        </Typography>
                        <Typography sx={{fontSize: "20px", mt: 1}}>
                            Our core values include a passionate dedication
                            to mental health and employee well-being. We
                            believe that even small steps, like creating
                            pleasant workspaces, can make a big difference.
                            That's why we offer indoor plants for offices and
                            workspaces. Our mission is to contribute to the
                            overall health and happiness of employees by
                            fostering environments that promote well-being.
                        </Typography>
                        <Typography sx={{fontSize: "20px", mt: 1}}>
                            Join us in our journey to transform spaces,
                            nurture well-being, and celebrate the beauty of
                            greenery. Together, we can make your world
                            greener and brighter.
                        </Typography>
                </Grid>
                <Grid item sm={12} lg={5}>
                    <Box component="img"
                                sx={{
                                    width: "100%",
                                    objectFit: "cover",
                                    aspectRatio: 3.3/3,
                                    objectPosition: "50% 80%"
                                }}
                                src={aboutUsImg} />
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutPage;