export const getPlants = async () => {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/plants`
    );
    return res.json() // Muistutus: Botha käyttää await ja se ei toimi!!
};

export const createPlant = async ({name, description, price, image}) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/plants`, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          description,
          price,
          image
        })
      }
    );
    return await res.json();
  };

  export const deletePlant= async ({id, token}) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/plants/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    );
    
    return await res.json();
  };
  