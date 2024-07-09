// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme

import Homepage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Service from './Pages/Service';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>  {/* Wrap the Router in ThemeProvider */}
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Service />} />
            {/* Add other routes here */}
          </Routes>
          {/* <Footer /> Uncomment this if you have a Footer component */}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
