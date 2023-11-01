import { useQuery } from '@tanstack/react-query';
import { getPlants } from "../api/plants";
import PlantsList from "../components/PlantsList";

const DUMMY = [
  {
    "name": "Jukkapalmu",
    "description": "Kiva palmukasvi",
    "price": 30.00,
    "image": "https://www.viherpeukalot.fi/images/products/12355-2_orig.jpg"
  },
  {
    "name": "Jukkapalmu",
    "description": "Kiva palmukasvi",
    "price": 30.00,
    "image": "https://www.viherpeukalot.fi/images/products/12355-2_orig.jpg"
  },
  {
    "name": "Jukkapalmu",
    "description": "Kiva palmukasvi",
    "price": 30.00,
    "image": "https://www.viherpeukalot.fi/images/products/12355-2_orig.jpg"
  },
  {
    "name": "Jukkapalmu",
    "description": "Kiva palmukasvi",
    "price": 30.00,
    "image": "https://www.viherpeukalot.fi/images/products/12355-2_orig.jpg"
  },
  {
    "name": "Jukkapalmu",
    "description": "Kiva palmukasvi",
    "price": 30.00,
    "image": "https://www.viherpeukalot.fi/images/products/12355-2_orig.jpg"
  },

]

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