import React from 'react';
import Navbar from '../components/All_Navbar';
import Hero from '../components/Products_Hero';
import Abbos from '../components/Products_Abbos';
import Modules from '../components/Products_Modules';
import AI from '../components/Products_AI';
// import Reviews from '../components/Products_Reviews';
import Footer from '../components/All_Footer';

function Products() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Modules />
      <AI />
      <Abbos />
      <Footer />
    </div>
  );
}

export default Products;