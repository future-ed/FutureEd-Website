import React from 'react';
import Hero from '../components/Home_Hero';
import Subjects from '../components/Home_Subjects'; 
import Mission from '../components/Home_Mission';
import Process from '../components/Home_Process';
import Contact from '../components/Home_Contact';

function Home() {
  return (
    <div>
      <Hero />
      <Subjects />
      <Mission />
      <Process />
      <Contact />
    </div>
  );
}

export default Home;