const PlantInfo = props => {
    return (
        <div>
            <img src={props.plantData.image} />
            <div>
                <h3>{props.plantData.name}</h3>
            </div>
            {props.plantData.description}
        </div>
    )
}
 
export default PlantInfo;