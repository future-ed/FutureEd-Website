import React from 'react'
import Icon_pf from '../assets/icon_pf.png'
import Icon_tax from '../assets/icon_tax.png'
import Icon_house from '../assets/icon_house.png'
import Icon_ins from '../assets/icon_ins.png'
import Icon_ls from '../assets/icon_ls.png'
import Icon_si from '../assets/icon_si.png'
import Icon_r from '../assets/icon_arrow_right.png'
import { HashLink } from 'react-router-hash-link';

const Subjects = () => {
  return (
    <div id='Subjects' className='w-full bg-white'>
      <div className='max-w-screen-xl mx-auto py-10 px-4 pt-20 text-center justify-center items-center'>
        <h1 className='font-bold text-black text-4xl md:text-5xl mb-4'>
          Subjects
        </h1>
        <p className='text-[#4F4F4F] text-[13px] md:text-xl mt-6'>
          The primary subjects we offer to students
        </p>
        <div className='grid md:grid-cols-3 grid-cols-1 justify-center'>
          <Card
            image={Icon_pf}
            title="Personal Finance"
            subtitle="How to make and grow money"
            description="We guide companies through digitalization processes to improve efficiency and competitiveness."
          />
          <Card
            image={Icon_tax}
            title="Taxes"
            subtitle="How to benefit from taxes"
            description="We create tailored software solutions to meet your unique business needs, providing scalable applications that drive growth and innovation."
          />
          <Card
            image={Icon_house}
            title="House & Cars"
            subtitle="Start living independently"
            description="We implement AI technologies to enhance and automate business processes and decision-making."
          />
          <Card
            image={Icon_ins}
            title="Insurance & Pension"
            subtitle="Prepare your adult life"
            description="We collaborate with your domain experts, ensuring rapid development and continuous feedback to deliver effective solutions."
          />
          <Card
            image={Icon_ls}
            title="Life skills"
            subtitle="Learn lifetime useful skills"
            description="We prioritize transparency through clear communication and a well-defined strategy and roadmap."
          />
          <Card
            image={Icon_si}
            title="Social Impact"
            subtitle="Improve your social image"
            description="We offer an introductory consultancy session, providing you with valuable insights and expert advice as we explore potential solutions tailored to your business needs."
          />
        </div>
        <div className='mt-8 flex items-center justify-center'>
          <p className='text-[#4F4F4F] hover:underline mr-2'>
            <HashLink smooth to='/#Contact' > Discover More </HashLink>
          </p>
          <img src={Icon_r} alt={'Discover More'} className='w-[30px] h-[30px]' />
        </div>
      </div>
    </div>
  );
}

export default Subjects;

const Card = ({ image, title, subtitle, description }) => {
    return (
      <div className='bg-white lg:w-[400px] max-w-[400px] rounded-lg my-3 text-[#122A41] px-10 flex flex-col justify-center items-start p-6 mx-auto sm:mx-0 shadow-lg relative'>
        <div className='bg-[#00B0E4] h-1 w-full'></div>
        <div className="flex flex-col">
          <img src={image} alt={title} className='w-[110px] h-[110px]' />
          <div className="ml-4">
            <h1 className='text-start text-xl font-bold'>{title}</h1>
            <h2 className='text-start text-[#4F4F4F] text-lg mt-2'>{subtitle}</h2>
          </div>
        </div>
        <div className="mt-3 h-[100px] overflow-hidden px-4">
          <p className='text-[#B5B2B2] text-start leading-[1.25rem] font-light'>{description}</p>
        </div>
      </div>
    );
  };
  