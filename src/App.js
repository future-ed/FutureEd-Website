import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home_page';
import Products from './pages/Products_page';
import Company from './pages/Company_page';
import Support from './pages/Support_page';

function App() {
  return (
    <BrowserRouter>	
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="company" element={<Company />} />
        <Route path="support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
