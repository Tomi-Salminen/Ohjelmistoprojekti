export const getPlants = async () => {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/plants`
    );
    return res.json() // Muistutus: Botha käyttää await ja se ei toimi!!
};