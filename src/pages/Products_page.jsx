import React from 'react';
import Navbar from '../components/All_Navbar';
import Hero from '../components/Products_Hero';
import Abbos from '../components/Products_LM_Pricing';
import Modules from '../components/Products_Modules';
import AI from '../components/Products_AI';
// import Reviews from '../components/Products_Reviews';
import Footer from '../components/All_Footer';
import PricingAI from '../components/Products_AI_Pricing';

function Products() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Modules />
      <Abbos />
      <AI />
      <PricingAI />
      <Footer />
    </div>
  );
}

export default Products;