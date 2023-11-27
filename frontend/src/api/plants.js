// retrieve a list of plants from the server
export const getPlants = async () => {
  // Making a GET request to the plants API endpoint
  const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/plants`
  );
  return res.json();
};

// create a new plant on the server
export const createPlant = async ({ name, description, price, image, token }) => {
  // Making a POST request to the plants API endpoint with user authorization
  const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/plants`,
      {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              // Attaching the user's token for authorization
              Authorization: 'Bearer ' + token
          },
          // Sending plant creation data in the request body
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

// delete a plant from the server
export const deletePlant = async ({ id, token }) => {
  // Making a DELETE request to the specific plant's API endpoint with user authorization
  const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/plants/${id}`,
      {
          method: 'DELETE',
          headers: {
              // Attaching the user's token for authorization
              Authorization: 'Bearer ' + token
          }
      }
  );

  return await res.json();
};
