
import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userId: null,
  userEmail: null,
  login: () => {},
  logout: () => {}
});