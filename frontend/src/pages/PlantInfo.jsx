import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Typography, Grid, Box, Button } from '@mui/material';
import { getPlants, deletePlant } from '../api/plants';
import { AuthContext } from '../components/auth-context';
import { useContext } from 'react';

const PlantInfo = () => {
    const { id } = useParams();
    const auth = useContext(AuthContext);
    const plantId = Number(id);
    const navigate = useNavigate();
    
    const deletePlantMutation = useMutation({
        mutationFn: deletePlant        
      })

    const deletePlantHandler= () => {
        try {
            deletePlantMutation.mutate({
                id: plantId,
                token: auth.token
            })
            console.log("plant deleted");
            navigate(-1);
        } catch (error) {
        console.log("Error deleting plant:", error);
        }
    }    
    
    const { isLoading, error, data } = useQuery({ queryKey: ['plants'], queryFn: getPlants });    

    if (isLoading) return (
        "Loading..."
    );
    if (error) return "An error has occurred: " + error.message;

    // Find the plant in the data array based on the property ID
    const selectedPlant = data.find(plant => plant.id === plantId);

    if (!selectedPlant) {
        return <div>Error: Plant not found</div>;
    }


    return (
        <div style={{ paddingTop: "20px"}}>
            <Typography variant='button' sx={{ color: '#183c25', fontSize: '2em', letterSpacing: "2px"}}>PLANTS & FLOWERS</Typography>
            <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xss={12} md={7}>

                    <Box component="img"
                        sx={{
                            width: "100%",
                            objectFit: "cover",
                            aspectRatio: 3.3/3,
                            objectPosition: "50% 80%"
                        }}
                        src={selectedPlant.image} />
                </Grid>

                <Grid item xss={12} md={5} sx={{ padding: "0px" }}>

                    <Typography variant="button"
                                sx={{color: '#183c25', textTransform: "uppercase", fontSize: "24px", letterSpacing: "2px", paddingTop: "-10px"}}>
                        {selectedPlant.name}
                    </Typography>
                    <Typography sx={{fontSize: "20px", mt: 1}}>
                        {selectedPlant.description}
                    </Typography>
                    {auth.userEmail === 'admin@gmail.com' && (
                    <Button onClick={deletePlantHandler} variant="contained" color="primary">
                        DELETE
                    </Button>
                    )}
                </Grid>     
                
            </Grid>
        </div>
    )
}
 
export default PlantInfo;