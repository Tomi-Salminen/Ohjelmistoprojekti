import PlantsItem from './PlantsItem';
import { Grid } from '@mui/material';

const PlantsList = props => {

    return (
        <Grid container spacing={3} sx={{paddingTop: "20px"}}>
            {props.plants.map(plant =>
            <Grid 
                item
                md={4}
                sm={4}  
                xs={12}
                key={plant.id}
                >
                <PlantsItem
                    key={plant.id}
                    id={plant.id}
                    name={plant.name}
                    image={plant.image}
                    price={plant.price}
                    changeView={props.changeView}
                />
            </Grid>
            )}
        </Grid>
     )};

export default PlantsList;