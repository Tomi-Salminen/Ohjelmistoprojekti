import { useQuery } from '@tanstack/react-query';
import { getPlants } from "../api/plants";
import PlantsList from "../components/PlantsList";
import { Typography } from '@mui/material';

const PlantsPage = () => {
    const { isLoading, error, data } = useQuery({ queryKey: ['plants'], queryFn: getPlants }
    );

    if (isLoading) return (
          "Loading..."
      );

    if (error) return "An error has occurred: " + error.message;

    return (
        <div style={{ paddingTop: "20px"}}>
            <Typography variant='button' sx={{ color: '#183c25', fontSize: '2em'}}>PLANTS & FLOWERS</Typography>
            <PlantsList plants={data}/>
        </div>
     );
};

export default PlantsPage;