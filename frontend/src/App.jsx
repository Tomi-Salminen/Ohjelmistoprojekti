import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContext } from './components/auth-context';
import { Container } from '@mui/material';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import PlantsPage from './pages/PlantsPage';

const queryClient = new QueryClient();
let logoutTimer; 

export default function App() {
  const [token, setToken] = useState(false);
  const [userId, setuser] = useState(false);
  const [userEmail, setEmail] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState(false);

  const login = useCallback((uid, token, uEmail, expirationDate) => {
    setToken(token);
    setuser(uid);
    setEmail(uEmail);

    const tokenExpirationDate = 
    expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid, 
        userEmail: uEmail,
        token,
        expiration: tokenExpirationDate.toISOString()
      })
    )
  },[]);

  const logout = useCallback(() => {
    setToken(null);
    setuser(null);
    setEmail(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('userData');
  },[]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token  && new Date(storedData.expiration) > new Date()) {
      login(storedData.userId, storedData.token, storedData.userEmail, new Date(storedData.expiration));
    }
  }, [login]);


  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return (
    <AuthContext.Provider
    value={{ 
      isLoggedIn: !!token, 
      token: token, 
      userId: userId, 
      userEmail: userEmail,
      login: login, 
      logout: logout
    }}>

    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='App'>
          <Navbar />
          <Container maxWidth="xl" >
              <Routes>
                <Route path="/" element={< HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/plants" element={<PlantsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route exact path="*" element={<HomePage />} />
              </Routes>
            </Container>
        </div>
      </Router>
    </QueryClientProvider>
    </AuthContext.Provider>
  );
}