import React from 'react';
import Hero from '../components/Home/Home_Hero';
import Subjects from '../components/Home/Home_Subjects'; 
import Mission from '../components/Home/Home_Mission';
import Process from '../components/Home/Home_School';
import Contact from '../components/Home/Home_Contact';
// import Testimonials from '../components/Home_Testimonials';

function Home() {
  return (
    <div>
      <Hero />
      <Subjects />
      <Mission />
      <Process />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}

export default Home;