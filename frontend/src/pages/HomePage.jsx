import { Container, Typography } from '@mui/material';
import topDownPlants from '../images/topDownPlants.jpeg';
import plantWatering from '../images/plantWatering.jpeg';
import leaves from '../images/leaves.jpg'
import './HomePage.css';



const Home = () => {
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
                <div className="smallerContainer">
                    <Typography variant="overline" display="block" color="secondary" sx={{fontWeight: 'bold'}}>plants & flowers</Typography>
                    <img src={topDownPlants} class="smallerPics"></img>
                </div>
                <div className="smallerContainer">
                    <Typography variant="overline" display="block" color="secondary" sx={{fontWeight: 'bold'}}>our services / maintanance</Typography>
                    <img  src={plantWatering} class="smallerPics"></img>
                </div>
                <div className="smallerContainer">
                    <Typography variant="overline" display="block" color="secondary" sx={{fontWeight: 'bold'}}>previous work</Typography>
                    <img src={leaves} class="smallerPics"></img>
                </div>
            </div>
        </Container>
     );
}

export default Home;