import { useQuery } from '@tanstack/react-query';
import { getPlants } from "../api/plants";
import PlantsList from "../components/PlantsList";
import PlantInfo from '../components/PlantInfo';
import { Typography } from '@mui/material';
import { useState } from 'react';

const PlantsPage = () => {
    const { isLoading, error, data } = useQuery({ queryKey: ['plants'], queryFn: getPlants }
    );
    const [plantId, setPlantId] = useState("plantsList");
    const changeView = (plantId) => {
        setPlantId(plantId);
    }
    let content = <PlantsList plants={data} changeView={changeView}/>;

    if (plantId === "plantsList"){
        content = <PlantsList plants={data} changeView={changeView}/>
    } else {
        console.log(data);
        content = <PlantInfo plantData={data[plantId]}/>
    }

    if (isLoading) return (
          "Loading..."
      );

    if (error) return "An error has occurred: " + error.message;

    return (
        <div style={{ paddingTop: "20px"}}>
            <Typography variant='button' sx={{ color: '#183c25', fontSize: '2em'}}>PLANTS & FLOWERS</Typography>
            {content}
        </div>
     );
};

export default PlantsPage;