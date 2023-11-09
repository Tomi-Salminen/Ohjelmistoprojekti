import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container } from '@mui/material';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import PlantsPage from './pages/PlantsPage';
import PlantInfo from './components/PlantInfo';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='App'>
          <Navbar />
          <Container maxWidth="xl">
              <Routes>
                <Route path="/" element={< HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/plants" element={<PlantsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/plants/plantinfo/:id" element={<PlantInfo />}/>
                <Route exact path="*" element={<HomePage />} />
              </Routes>
            </Container>
        </div>
      </Router>
    </QueryClientProvider>
  );
}