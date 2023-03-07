import React from 'react';
import Navbar from '../components/All_Navbar';
import HeroSupport from '../components/Support_Hero';
import Footer from '../components/All_Footer';
import Faq from '../components/Support_FAQ';

function Support() {
  return (
    <div>
      <Navbar />
      <HeroSupport />
      <Faq />
      <Footer />
    </div>
  );
}

export default Support;