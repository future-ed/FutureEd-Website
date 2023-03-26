import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home_page';
import Products from './pages/ProductsDocenten_page';
import Company from './pages/Company_page';
import Support from './pages/Support_page';
import Helmet from 'react-helmet';
import ProductsStudents from './pages/ProductsStudents_page';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FutureEd</title>
      </Helmet>

      <BrowserRouter>	
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="products-schools" element={<Products />} />
          <Route path="products-students" element={<ProductsStudents />} />
          <Route path="company" element={<Company />} />
          <Route path="support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
