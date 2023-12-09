import React from 'react'
import Icon_pf from '../../assets/icons/icon_pf.png'
import Icon_tax from '../../assets/icons/icon_tax.png'
import Icon_house from '../../assets/icons/icon_house.png'
import Icon_ins from '../../assets/icons/icon_ins.png'
import Icon_ls from '../../assets/icons/icon_ls.png'
import Icon_si from '../../assets/icons/icon_si.png'
import Icon_r from '../../assets/icons/icon_arrow_right.png'
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
            description="Comprehensive content covering personal finance, teaching financial literacy."
          />
          <Card
            image={Icon_tax}
            title="Taxes"
            subtitle="How to benefit from taxes"
            description="Explaining the tax system and how to benefit from it."
          />
          <Card
            image={Icon_house}
            title="House & Cars"
            subtitle="Start living independently"
            description="Explain aspects of living independently, such as housing, insurance, and cars."
          />
          <Card
            image={Icon_ins}
            title="Career Building" 
            subtitle="Prepare your professional life"
            description="Aid with building your CV/LinkedIn, networking, negotiation, and communication skills."
          />
          <Card
            image={Icon_ls}
            title="Life skills"
            subtitle="Learn lifetime useful skills"
            description="Teach essential life skills such as learning faster, effective time management, overcoming procrastination, and goal setting."
          />
          <Card
            image={Icon_si}
            title="Health"
            subtitle="Improve your wellbeing"
            description="Teach how to improve your wellbeing, such as mental health, physical health, and nutrition."
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
        <div className='bg-[#F69BF4] h-1 w-full'></div>
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
  