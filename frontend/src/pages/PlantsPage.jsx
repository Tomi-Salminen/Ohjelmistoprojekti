import { useQuery } from 'react-query';
import { getPlants } from "../api/plants";
import PlantsList from "../components/PlantsList";

const PlantsPage = () => {
    const { isLoading, error, data } = useQuery({ queryKey: ['plants'], queryFn: getPlants }
    );

    if (isLoading) return (
          "Loading..."
      );

    if (error) return "An error has occurred: " + error.message;

    return (
        <PlantsList plants={data}/>
     );
};

export default PlantsPage;