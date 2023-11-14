import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { getPlants } from "../api/plants";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const PlantInfo = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery({ queryKey: ['plants'], queryFn: getPlants }
    );

    if (isLoading) return (
        "Loading..."
    );
    if (error) return "An error has occurred: " + error.message;

    return (
        <div style={{ paddingTop: "20px"}}>
            <Typography variant='button' sx={{ color: '#183c25', fontSize: '2em', letterSpacing: "2px"}}>PLANTS & FLOWERS</Typography>
            <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={5}>
                    <Box component="img"
                        sx={{
                            width: "100%",
                            objectFit: "cover",
                            aspectRatio: 3.3/3,
                            objectPosition: "50% 80%"
                        }}
                        src={data[id].image} />
                </Grid>
                <Grid item xs={7} sx={{ padding: "0px" }}>
                    <Typography variant="button"
                                sx={{color: '#183c25', textTransform: "uppercase", fontSize: "24px", letterSpacing: "2px", paddintTop: "-10px"}}>
                        {data[id].name}
                    </Typography>
                    <Typography sx={{fontSize: "20px", mt: 1}}>
                        {data[id].description}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
 
export default PlantInfo;