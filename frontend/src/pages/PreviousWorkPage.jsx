import { Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import cafeLunaImg from "../images/cafeLuna.jpeg";
import cafeLilithImg from "../images/cafeLilith.jpeg";
import restaurantMillieImg from "../images/restarantMillie.jpg";

const PreviousWorkPage = () => {
    const itemLinkStyle = {
        fontWeight: 'bold',
        "&:hover": {
            textDecoration: 'underline'
        }
    };

    return ( 
        <Container maxWidth="xl" sx={{paddingTop: "25px"}}>
            <Typography variant='button' sx={{ color: '#183c25', fontSize: '2em', letterSpacing: "2px", marginLeft: "20px"}}>OUR PREVIOUS WORK</Typography>
            <div className="itemContainer">
                <NavLink className="smallerContainer hoverAnimation">
                    <img src={cafeLunaImg} className="smallerPics"></img>
                    <Typography variant="overline" display="block" color="secondary" sx={itemLinkStyle}>CAFE LUNA</Typography>
                </NavLink>
                <NavLink className="smallerContainer hoverAnimation">
                    <img src={cafeLilithImg} className="smallerPics"></img>
                    <Typography variant="overline" display="block" color="secondary" sx={itemLinkStyle}>CAFE LILITH</Typography>
                </NavLink>
                <NavLink className="smallerContainer hoverAnimation">
                    <img src={restaurantMillieImg} className="smallerPics"></img>
                    <Typography variant="overline" display="block" color="secondary" sx={itemLinkStyle}>RESTAURANT MILLIE</Typography>
                </NavLink>
            </div>
        </Container>
     );
}
 
export default PreviousWorkPage;