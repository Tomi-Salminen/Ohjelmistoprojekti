import PlantsItem from './PlantsItem';

const PlantsList = props => {
    return (
        <div>
            {props.plants.map(plant =>
                <PlantsItem
                    name={plant.name}
                    key={plant.id}
                />
            )}
        </div>
     )};

export default PlantsList;