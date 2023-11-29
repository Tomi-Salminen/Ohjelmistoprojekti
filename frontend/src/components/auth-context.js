
import { createContext } from 'react';

// Creating an authentication context using createContext
export const AuthContext = createContext({
  // Default values for the context's properties
  isLoggedIn: false,    // Indicates whether a user is logged in or not
  token: null,          // Stores the user's authentication token
  userId: null,         // Stores the user's ID
  userEmail: null,      // Stores the user's email
  login: () => {},      // Placeholder function for handling user login
  logout: () => {}      // Placeholder function for handling user logout
});