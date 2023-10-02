import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Container>
            <Routes>
              <Route path="/" element={< HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route exact path="*" element={<HomePage />} />
            </Routes>
          </Container>
        </div>
      </div>
    </Router>

  );
}