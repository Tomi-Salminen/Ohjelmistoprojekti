import { Card, CardMedia, CardActionArea, CardContent,
         Typography } from '@mui/material';

const PlantsItem = props => {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <CardMedia 
                        component="img"
                        height="300"
                        image={props.image}
                        />
                        <Typography variant="h6">{props.name}</Typography>
                        <Typography>{props.price} €</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
     );
}

export default PlantsItem;