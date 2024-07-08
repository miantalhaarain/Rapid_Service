// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Service from './Pages/Service'; // Import the new Service page

import Navbar from './Component/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} /> {/* Add the new route */}
          {/* Add other routes here */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
