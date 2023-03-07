import React from 'react';
import Navbar from '../components/All_Navbar';
import HeroCompany from '../components/Company_Hero';
import Footer from '../components/All_Footer';
import Stats from '../components/Company_Stats';
// import TrustedPartners from '../components/Company_TrustedPartners';

function Company() {
  return (
    <div>
      <Navbar />
      <HeroCompany />
      <Stats />
      {/* <TrustedPartners /> */}
      <Footer />
    </div>
  );
}

export default Company;