import { Container, Typography } from '@mui/material';
import topDownPlants from '../images/topDownPlants.jpeg';
import plantWatering from '../images/plantWatering.jpeg';
import leaves from '../images/leaves.jpg';
import './HomePage.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const itemLinkStyle = {
        fontWeight: 'bold',
        "&:hover": {
            textDecoration: 'underline'
        }
    };

    return (
        <Container maxWidth="xl" >
            <div id="plantImage">
                <div id="bigImageText">
                    <Typography
                        sx={{
                            letterSpacing: '.3rem',
                            fontSize: {
                                xxs: '12px',
                                xs: '13px',
                                sm: '16px',
                                md: '20px'
                            }
                        }}>
                        For a greener work enviroment
                    </Typography>
                </div>
            </div>
            <div className="itemContainer">
                <NavLink to="/plants" className="smallerContainer hoverAnimation">
                        <Typography variant="overline" display="block" color="secondary" sx={itemLinkStyle}>plants & flowers</Typography>
                        <img src={topDownPlants} className="smallerPics"></img>
                </NavLink>
                <NavLink to="/services" className="smallerContainer hoverAnimation">
                    <Typography variant="overline" display="block" color="secondary" sx={itemLinkStyle}>our services / maintanance</Typography>
                    <img  src={plantWatering} className="smallerPics"></img>
                </NavLink>
                <div className="smallerContainer hoverAnimation">
                    <Typography variant="overline" display="block" color="secondary" sx={itemLinkStyle}>previous work</Typography>
                    <img src={leaves} className="smallerPics"></img>
                </div>
            </div>
        </Container>
     );
}

export default Home;