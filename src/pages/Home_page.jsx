import React from 'react';
import Navbar from '../components/All_Navbar';
import Hero from '../components/Home_Hero';
// import Abbos from '../components/Home_Abbos';
import Footer from '../components/All_Footer';
// import Reviews from '../components/Home_Reviews';
// import Ai from '../components/Home_Ai';
// import Modules from '../components/Home_Modules';
// import Contactletter from '../components/Home_Contactletter';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Modules /> */}
      {/* <Reviews />  */}
      {/* <Ai /> */}
      {/* <Abbos /> */}
      {/* <Contactletter /> */}
      <Footer />
    </div>
  );
}

export default Home;