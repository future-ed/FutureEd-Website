import React from 'react';
import Navbar from '../components/All_Navbar';
import Hero from '../components/Products_Hero';
import Abbos from '../components/Products_LM_Pricing';
import Modules from '../components/Products_Modules';
// import Reviews from '../components/Products_Reviews';
import Footer from '../components/All_Footer';
import ModulesHome from '../components/Studenten_Modules';

function Products() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ModulesHome subtitle = "Voel je alsof je belangrijke informatie mist over persoonlijke financiën, persoonlijke ontwikkeling, verzekeringen, pensioen, huisvesting en auto's? Dan is onze dienst perfect voor jou! Wij zorgen ervoor dat je geen belangrijke informatie mist die je niet op school mee krijgt!"/>
      <Modules />
      <Abbos />
      <Footer />
    </div>
  );
}

export default Products;