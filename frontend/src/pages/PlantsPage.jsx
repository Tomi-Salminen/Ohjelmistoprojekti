import { useQuery } from '@tanstack/react-query';
import { getPlants } from "../api/plants";
import { Container } from '@mui/material';
import PlantsList from "../components/PlantsList";

const DUMMIES = [
    {
        "id": 1,
        "name": "Jukkapalmu"
    },
    {
        "id": 2,
        "name": "Kukka"
    }
]

const PlantsPage = () => {
    const { isLoading, error, data } = useQuery({ queryKey: ['plants'], queryFn: getPlants }
    );

    if (isLoading) return (
        <Container maxWidth="xl" >
          Loading...
        </Container>
      );

    if (error) return "An error has occurred: " + error.message;

    return (
        <PlantsList plants={data}/>
     );
};

export default PlantsPage;