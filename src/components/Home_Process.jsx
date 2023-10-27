import React from 'react'
import Icon1 from '../assets/icon_p1.png'
import Icon2 from '../assets/icon_p2.png'
import Icon3 from '../assets/icon_p3.png'
import BG from '../assets/bg_school.png';

const School = () => {
  return (
    <div id='School' className='w-full bg-white  min-w-screen max-w-screen bg-cover bg-center bg-no-repeat md:h-screen' style={{ backgroundImage: `url(${BG})`,}}>
      <div className='max-w-screen-xl mx-auto py-10 px-4 pt-20 text-center'>
        <h1 className='font-bold text-black text-4xl md:text-5xl mb-4'>
          School
        </h1>
        <p className='text-[#4F4F4F] text-[13px] md:text-xl mt-6'>
        We work with schools to provide students with the skills they need to succeed in the 21st century.
        </p>
        <div className='flex flex-col md:flex-row justify-center gap-20 mt-20 px-10 md:px-0 '>
          <Card
            image={Icon1}
            title="Contact"
            description="We offer an introductory consultancy session, providing you with valuable insights and expert advice as we explore potential solutions tailored to your school and students."
          />
          <Card
            image={Icon2}
            title="Implementation"
            description="We implement our solution in your school, ensuring that it is tailored to your school's needs and students' learning styles."
          />
          <Card
            image={Icon3}
            title="Refine"
            description="We refine our solution based on feedback from students and teachers yearly, ensuring that our solution is the best fit for your school."
          />
        </div>
      </div>
    </div>
  );
}

export default School;

const Card = ({ image, title, description }) => {
    return (
      <div className='bg-[#F7F6FB] lg:w-[360px] max-w-[360] h-[200px] lg:h-[500px] rounded-lg px-10 my-3 text-[#122A41] flex flex-col justify-start items-start p-6 mx-auto sm:mx-0 shadow-lg relative'>
        <div className="flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start">
            <img src={image} alt={title} className='w-[90px] h-[90px] mb-0 md:mb-20 mr-4 md:mr-0' />
            <div className="flex flex-col">
                <div className="ml-4">
                    <h1 className='text-start text-xl font-bold'>{title}</h1>
                </div>
                <div className="mt-3 h-[100px] overflow-hidden px-4">
                    <p className='text-[#B5B2B2] text-start leading-[1.25rem] font-light'>{description}</p>
                </div>
            </div>
        </div>
    </div>
    );
  };
  