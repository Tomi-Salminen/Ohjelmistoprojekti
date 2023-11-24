import { Container, Typography, Grid, Box, Link} from "@mui/material";
import contactImg from "../images/contactImg.jpeg";

const ContactPage = () => {
    const textStyle = {
        color: '#183c25',
        fontWeight: '100'
    };

    return (
        <Container maxWidth="xl" sx={{paddingTop: "25px"}}>
            <Typography variant='button' sx={{ color: '#183c25', fontSize: '2em', letterSpacing: "2px"}}>Contact</Typography>
            <Grid container spacing={4} sx={{paddingTop: "20px"}}>
                <Grid item sm={12} lg={7}>
                    <Box component="img"
                            sx={{
                                width: "100%",
                                objectFit: "cover",

                            }}
                            src={contactImg}/>
                </Grid>
                <Grid item sm={12} lg={5}>
                    <Typography mb={4} variant='h5' sx={textStyle}>+358 1234 59381</Typography>
                    <Typography mb={4} variant='h5' sx={textStyle}> info@greenies.fi</Typography>
                    <Typography variant='h5' sx={textStyle}>Kuntokatu 3, 33520</Typography>
                    <Typography variant='h5' sx={textStyle}>Tampere</Typography>
                    <Link variant='h5' sx={{color: '#183c25',fontWeight: '100', fontStyle: 'italic'}} target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/3MftuCQ2KFucuk4x7">
                        Map
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactPage;