export const signUpUser = async ({username, email, password}) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/accounts/signup`, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      }
    );
    return await res.json();
  }


export const loginUser = async ({email, password}) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/accounts/login`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );
    return await res.json();
  }