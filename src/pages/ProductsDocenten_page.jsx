import React from 'react';
import Navbar from '../components/All_Navbar';
import Abbos from '../components/Products_LM_Pricing';
import Modules from '../components/Products_Modules';
import AI from '../components/Products_AI';
// import Reviews from '../components/Products_Reviews';
import Footer from '../components/All_Footer';
import PricingAI from '../components/Docenten_AI_Pricing';
import Ai from '../components/Docenten_AI';
import ModulesHome from '../components/Docenten_Modules';
import Hero from '../components/Docenten_Hero';

function Products() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ModulesHome />
      <Ai />
      <Modules />
      <AI />
      <Abbos />
      <PricingAI />
      <Footer />
    </div>
  );
}

export default Products;