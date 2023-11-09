import { Card, CardMedia, CardActionArea, CardContent,
         Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const PlantsItem = props => {

    return (
        <Card>
            <CardActionArea component={ NavLink } to={`plantinfo/${props.id - 1}`}>
                <CardContent sx={{ textAlign: "center" }}>
                    <CardMedia 
                        component="img"
                        image={props.image}
                        sx={{ marginBottom: "5px", objectPosition: "50% 100%", aspectRatio: 3.3/3}}
                        />
                        <Typography variant="button" color="secondary" sx={{ fontSize: '1.1em' }}>{props.name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
     );
}

export default PlantsItem;