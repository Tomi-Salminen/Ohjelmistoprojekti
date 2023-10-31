export const getPlants = async () => {
    const res = await fetch(
        "http://localhost:3001/api/plants"
    );
    return res.json() // Muistutus: Botha käyttää await ja se ei toimi!!
};