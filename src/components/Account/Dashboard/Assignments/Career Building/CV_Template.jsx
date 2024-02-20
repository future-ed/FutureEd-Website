import React from 'react'
import Mouse from '../../../../../assets/Mouse.png'

const CV_Template = () => {
    const fileName = 'CV_Template.docx';
    const gradientStyleBlue = {
      background: 'linear-gradient(to top, #94A9F6, #CA7ED4)',
      //color: 'transparent', 
    };

    return (
        <div className="cv-template">
          <div className="flex justify-end mt-[30px]" style={{ position: 'relative' }}>
            <a 
              href={`${process.env.PUBLIC_URL}/${fileName}`}  
              download
              className="text-white bg-black py-2 px-5 rounded-full hover:underline"
            >
              Download
            </a>
            <img
              src={Mouse}
              alt="/"
              className="absolute bottom-0 right-0 w-[45px] h-[40px]"
              style={{ transform: 'rotate(4deg)', right: '-5px', bottom: '-60%' }} 
            />
          </div>
          <header className="cv-header mb-7 mt-[-40px]">
            <h1 className='flex justify-center'>JOHN DOE</h1>
            <p className='flex justify-center'>john.doe@example.com | +31(6)12345678</p>
            <p className='flex justify-center'>www.linkedin.com/in/johndoe</p>
            <p className='flex justify-center'>potential other useful links</p>
          </header>
    
          <section className="cv-section">
            <h2>EDUCATION</h2>
            <hr className='mt-1 mb-2' style={{ width: '100%', border: '1px solid black' }} />
            <div className='flex justify-between items-center'>
                <span><strong>Your school</strong></span>
                <span className='flex text-right'><strong>City, Country Code</strong></span>
            </div>
            <div className='flex justify-between items-center italic'>
                <p>Your study</p>
                <span lassName='flex text-right'>09/2015 - 07/2017</span>
            </div>
            
            <ul className='ml-5 mb-6'>
              <li>GPA: X.X/4.0</li>
              <li>Core courses: [List the courses the company you are applying for wants to see].</li>
              <li>Awards: [Enter your potential Awards here]</li>
            </ul>
          </section>
    
          <section className="cv-section">
            <h2>EXPERIENCE</h2>
            <hr className='mt-1 mb-2' style={{ width: '100%', border: '1px solid black' }} />
            <div>
            <div className='flex justify-between items-center'>
                <span><strong>Coolblue[Example]</strong></span>
                <span className='flex text-right'><strong>City, Country Code</strong></span>
            </div>
            <div className='flex justify-between items-center italic'>
                <p>Sales Associate</p>
                <span lassName='flex text-right'>04/2020 - 03/2023</span>
            </div>
              <ul className='ml-5 mb-6'>
                <li>[Task/Action] -&gt; [Result]</li>
                <li>Served as a sales associate in a busy electronics store, actively advising and helping customers choose products, resulting in a 15% increase in sales during my tenure.</li>
              </ul>
            </div>
            <div>
              <div className='flex justify-between items-center'>
                <span><strong>Company B.V.</strong></span>
                <span className='flex text-right'><strong>City, Country Code</strong></span>
            </div>
            <div className='flex justify-between items-center italic'>
                <p>Position</p>
                <span lassName='flex text-right'>02/2018 - 02/2020</span>
            </div>
              <ul className='ml-5 mb-6'>
                <li>[Task/Action] -&gt; [Result]</li>
              </ul>
            </div>
          </section>
    
          <section className="cv-section">
            <h2>SKILLS</h2>
            <hr className='mt-1 mb-2' style={{ width: '100%', border: '1px solid black' }} />
            <p className='mb-6'>Technical skills: [List the courses the company you are applying for wants to see] Languages: language 1 (native language), language 2 (native language), language 3 (professional)</p>
          </section>
    
          <section className="cv-section">
            <h2>EXTRACURRICULAR ACTIVITIES</h2>
            <hr className='mt-1 mb-2' style={{ width: '100%', border: '1px solid black' }} />
            <div>
            <div className='flex justify-between items-center'>
                <span><strong>Student Association</strong></span>
                <span className='flex text-right'><strong>Amsterdam,NL</strong></span>
            </div>
            <div className='flex justify-between items-center italic'>
                <p>Board member, Marketing Department</p>
                <span lassName='flex text-right'>09/2015 - 07/2016</span>
            </div>
              <ul className='ml-5 mb-6'>
                <li>[Task/Action] -&gt; [Result]</li>
                <li>Led the development and implementation of a comprehensive marketing strategy [Task] that included targeted online campaigns, social media engagement and membership initiatives. [Action] This strategic approach resulted in a remarkable 30% increase in association membership within one year. [Result]</li>
                <li>Demonstrated leadership by initiating and leading collaborative efforts between departments, working closely with colleagues from different departments to align goals and resources. This initiative fostered a strong sense of teamwork and cohesion among board members, increasing the overall effectiveness of the organization.</li>
              </ul>
            </div>
          </section>
    
          <section className="cv-section">
            <h2>PROJECTS</h2>
            <hr className='mt-1 mb-2' style={{ width: '100%', border: '1px solid black' }} />
            <ul className='mb-12'>
                <p className='font-bold'>Sustainability Research: <span className='font-normal'>Led a research project at the university on sustainability practices within the university campus.</span></p>
                <p className='font-bold'>Sports Event Coordination: <span className='font-normal'>Organized and coordinated a large-scale soccer tournament for a charity to raise money for a local charity.</span></p>
            </ul>
          </section>
        </div>
      );
}

export default CV_Template
