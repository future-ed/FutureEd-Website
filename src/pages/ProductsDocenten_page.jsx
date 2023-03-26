import React from 'react';
import Navbar from '../components/All_Navbar';
import AI from '../components/Products_AI';
// import Reviews from '../components/Products_Reviews';
import Footer from '../components/All_Footer';
import PricingAI from '../components/Docenten_AI_Pricing';
import Ai from '../components/Docenten_AI';
import ModulesHome from '../components/Docenten_Modules';
import Hero from '../components/Docenten_Hero';
import Abbos from '../components/Docenten_LM_Pricing';
import ModulesContent from '../components/Docenten_LM';

function Products() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ModulesHome />
      <Ai />
      <ModulesContent />
      <AI />
      <Abbos />
      <PricingAI />
      <Footer />
    </div>
  );
}

export default Products;