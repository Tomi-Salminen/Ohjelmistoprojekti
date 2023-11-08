import { Card, CardMedia, CardActionArea, CardContent,
         Typography } from '@mui/material';

const PlantsItem = props => {
    return (
        <Card>
            <CardActionArea>
                <CardContent sx={{ textAlign: "center" }}>
                    <CardMedia 
                        component="img"
                        height="300"
                        width="400"
                        image={props.image}
                        sx={{ marginBottom: "5px"}}
                        />
                        <Typography variant="button" color="secondary" sx={{ fontSize: '1.1em' }}>{props.name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
     );
}

export default PlantsItem;