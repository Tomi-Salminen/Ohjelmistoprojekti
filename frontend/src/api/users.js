// sign up a new user
export const signUpUser = async ({ username, email, password }) => {
  // Making a POST request to the sign-up API endpoint
  const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/accounts/signup`,
      {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          // Sending user registration data in the request body
          body: JSON.stringify({
              username,
              email,
              password
          })
      }
  );
  if (!res.ok) {
      throw new Error(res.status);
  }
  return await res.json();
}

// log in an existing user
export const loginUser = async ({ email, password }) => {
  // Making a POST request to the login API endpoint
  const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/accounts/login`,
      {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          // Sending user login data in the request body
          body: JSON.stringify({
              email,
              password
          })
      }
  );
  return await res.json();
}
