import React from 'react'

const Interview_Questions = () => {
    const fileName = 'Interview Questions.docx';
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
        <div className="flex justify-end mt-[-30px] mb-3" style={{ position: 'relative' }}>
            <a 
              href={`${process.env.PUBLIC_URL}/${fileName}`}  
              download
              className="text-white bg-black py-2 px-5 rounded-full hover:underline"
            >
              Download
            </a>
        </div>
        <h1 className='font-bold mb-2'>
            Interview Quetions
        </h1>
        <p className='mb-10'>In this exercise, we will provide you with a template for answering the most common interview questions so that you are well prepared for your next interview.</p>
        <p className='mb-5'>1. Tell me about yourself:
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'>I was a customer service representative at a technology startup. Over the last 2 years, I was able to increase customer success from 20% to 50% during my time there. My strengths are that I am excellent at reducing the time to value per customer, which leads to a more efficient overall process. So the reason I applied for this job is because I saw that you were looking for a customer service person and I thought that this would be a good fit as I have done this at a technology company before.</span></p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>I was a 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '360px',
                textAlign: 'center'
            }}
            placeholder="[Where you have been (title + role)]" 
        />. Over the last
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '220px'
            }}
            placeholder="[Period you worked there]" 
        />
        years, I was able to 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '280px',
                textAlign: 'center'
            }}
            placeholder=" [The results you have drive] " 
        />
        during my time there. My strengths are that I am excellent at
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '280px',
                textAlign: 'center'
            }}
            placeholder=" [Your biggest strengths] " 
        /> 
        , which leads to 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '280px',
                textAlign: 'center'
            }}
            placeholder=" [Result] " 
        />
        . So the reason I applied for this job is because I saw that you were looking for a
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '190px',
                textAlign: 'center'
            }}
            placeholder=" [Job position] " 
        /> 
        and I thought that this would be a good fit as I have done this at a 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '190px',
                textAlign: 'center'
            }}
            placeholder=" [previous company] " 
        />before.</span></p>
        </p>

        <p className='mb-5'>2. Walk me through your resume:
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'>In my previous job, I worked in a restaurant where I was primarily responsible for social media marketing. Here, I developed my content creation and lead generation skills, which resulted in a 23% increase in weekly customers. At the same time, to further develop my social media skills, I joined the marketing committee of the student association where I was responsible for creating content to attract new members. In my year, total membership increased from 500 to 1200. These work experiences have taught me the importance of teamwork, innovation and accountability. I'm eager to bring this experience to your company and contribute to its continued success.</span></p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>In my previous job,
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '930px',
                textAlign: 'center'
            }}
            placeholder="[Talk about the relevant function, results that you have driven and skills you have learned]" 
        />. 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '930px',
                textAlign: 'center'
            }}
            placeholder="[Talk about other relevant jobs you had]" 
        />
        . These work experiences have taught me
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '610px',
                textAlign: 'center'
            }}
            placeholder="[The values you have learned and are align with the company]" 
        />
        . I'm eager to bring this experience to
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '180px',
                textAlign: 'center'
            }}
            placeholder=" [Company Name]" 
        /> 
        , contributing to its success.</span></p>
        </p>

        <p className='mb-5'>3. Why do you want to work for this company?
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'>When I looked up your company on your Linkedin, it said that your company embraces innovation in employee well-being. I love that your company talks about and values employee well-being because as a Human Resources major, I align myself with these values and strive to make these values the norm. That is why I feel like I was the right fit for this role because those things resonated so strongly with me.</span></p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>When i looked up your company
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '520px',
                textAlign: 'center'
            }}
            placeholder="[Website, linkedin or place you did research]" 
        /> said
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '930px',
                textAlign: 'center'
            }}
            placeholder="[x y z]" 
        />
        .  I love that your company talks about and values
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '560px',
                textAlign: 'center'
            }}
            placeholder=" [x y z]" 
        /> 
        because
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '680px',
                textAlign: 'center'
            }}
            placeholder="[reason the values align with you]" 
        /> 
        . Because of that I feel like I was the right fit for this role because those things resonated with me so much.
        </span></p>
        </p>

        <p className='mb-5'>4. What is your greatest weakness?
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'>Thanks for your question. In my career as a social media marketer, I've identified a weakness that I've actively worked on, such as my occasional struggle with public speaking. Although not directly related to my role, there were instances where effective communication with clients required more confidence in presenting ideas.</span></p>
        <p className='mb-3'>Through conscious effort and seeking guidance from communication professionals, I've made significant progress in overcoming this challenge. I've participated in public speaking courses and workshops that have not only improved my confidence, but have also positively impacted my ability to articulate ideas and strategies to clients.</p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>Thanks for your question. In my career as
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '190px',
                textAlign: 'center'
            }}
            placeholder="[Your job]" 
        />, I've identified a weakness that I've been actively working on
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '740px',
                textAlign: 'center'
            }}
            placeholder="[mention a weakness unrelated to the role]" 
        />
        ,such as
        <input
            className='mb-3'
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '868px',
                textAlign: 'center'
            }}
            placeholder="[provide a brief example]" 
        />.
        
        Through deliberate effort and seeking guidance from 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '260px',
                textAlign: 'center'
            }}
            placeholder="[industry experts]" 
        /> 
        , I've made significant progress in overcoming this challenge.
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '700px',
                textAlign: 'center'
            }}
            placeholder="[What you have done to improve and what the result was]" /> </span></p>
        </p>

        <p className='mb-5'>5. What makes you unique?
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'>What makes me unique is my rare combination of creative skills paired with strong organizational skills, a background in finance, and solid interpersonal skills. This distinct skill set has proven valuable in my past roles, allowing me to deliver innovative solutions with precision.</span></p>
        <p className='mb-3'>This blend seamlessly aligns with the demands of financial strategy development, where creativity, organizational finesse, and the ability to bridge technical and interpersonal aspects are essential. I look forward to bringing this unique skill set to FutureEd.</p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>What makes me unique is
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '610px',
                textAlign: 'center'
            }}
            placeholder="[Unique pairing of skills]" 
        />. This distinct skill set has proven valuable in my past roles, allowing me
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '373px',
                textAlign: 'center'
            }}
            placeholder="[Results driven]" 
        />
        .
        This blend seamlessly aligns with the demands of
        <input
            className='mb-3'
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '535px',
                textAlign: 'center'
            }}
            placeholder="[specific position you're applying for]" 
        />, where
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '650px',
                textAlign: 'center'
            }}
            placeholder="[The unique skillset you have]" 
        /> 
        are essential. I look forward to bringing this unique skill set to
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '230px',
                textAlign: 'center'
            }}
            placeholder=" [Company Name]" 
        />.
         </span></p>
        </p>

        <p className='mb-5'>6. Why are you leaving your current role?
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'>The reason I'm leaving my current role is because I didn't see room for growth and I want to continue to grow. And the reason I am so interested in this job is because you have expressed that this role will allow me to grow into a senior role and has the potential to become a shareholder of the company, which are the things I would strive for that were not possible in my last job.</span></p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>The reason I am leaving my current role is because
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '410px',
                textAlign: 'center'
            }}
            placeholder="[The reason]" 
        />
        . And the reason i am so interested in this job is because you have expressed
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '330px',
                textAlign: 'center'
            }}
            placeholder="[Things you want]" 
        />
        , which are the things that I want. That I didn't have at my last job.
         </span></p>
        </p>

        <p className='mb-5'>7. What are your desires for this new position?
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'> For me to excel, I need a collaborative and innovative environment that values open communication. In addition, I work best in an environment where I have some autonomy to do my own work, but also a leader who provides some support and clarity for my work.</span></p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>For me to excel, I need 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '630px',
                textAlign: 'center'
            }}
            placeholder="[desire you have]" 
        />. Additionally,
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '833px',
                textAlign: 'center'
            }}
            placeholder="[Other desires that you have that will utilize your strengths]" 
        />
        .
        </span></p>
        </p>

        <p className='mb-5'>8. What are your desires for this new position?
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'> I would like to see what my growth opportunities are for the role in this company and aim to pursue this path to achieve the highest possible title. I can see myself being here for 4 years building the social marketing structure and making sure that the marketing strategy is optimized. Beyond that I don't know if there is room for me but I can see myself committing a solid 4 years here and obviously when the time comes when there is no more growth to backfill myself.</span></p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '815px',
                textAlign: 'center'
            }}
            placeholder="[Your career aspiration]" 
        />
        . I can see myself being here for
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '690px',
                textAlign: 'center'
            }}
            placeholder="[How long you are willing to commit to the company]" 
        />
        , doing/building
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '820px',
                textAlign: 'center'
            }}
            placeholder="[What you aim to do at the company]" 
        />.
         <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '935px',
                textAlign: 'center'
            }}
            placeholder="[What you are going to do when there is no fit anymore]" 
        />.

         </span></p>
        </p>

        <p className='mb-5'>9. What is your goal compensation?
        <p className='font-bold mb-3 mt-4'>Example: <span className='font-normal'>Based on my research, I have seen that companies like Google and Apple pay between €70.000 and €100.000. Additionally, if you look on payscale.com and salary.com, they show an average of €80.000. My goal would be to be in that range, preferably on the high end, considering I have 5+ years of experience in the field. I would feel that my salary should reflect this by being in the range of €85.000 and €100.000.</span></p>
        <p className='font-bold mb-10'>Your Answer: <span className='font-normal'>Based on my research I have seen that companies like
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '230px',
                textAlign: 'center'
            }}
            placeholder="[Name of Companies]" 
        />are paying between
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '225px',
                textAlign: 'center'
            }}
            placeholder="[The pay range you found]" 
        />
        . Additionally, if you look on
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '250px',
                textAlign: 'center'
            }}
            placeholder="[Trustworthy Salary websites]" 
        />
        they show an average of 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '130px',
                textAlign: 'center'
            }}
            placeholder="[Salary shown]" 
        /> 
        . My goal would be to be in that range, preferably 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '410px',
                textAlign: 'center'
            }}
            placeholder="[Your preference based on skill and experience]" 
        /> 
        . I would feel that my salary should reflect this by being in the range of 
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '200px',
                textAlign: 'center'
            }}
            placeholder="[Shorter Salary range]" 
        /> 
        .
        </span></p>
        </p>

        <p className='mb-5'>10. What questions do you have for us?
        <p className='mb-3 mt-4'>Always have questions! You will be working there for a long time, so it would make no sense not to have questions for them.</p>
        <p className='font-bold mb-8'>Example Quesitons: <span className='font-normal'>
        <p className='ml-4'>- <span className='ml-2'>On the Job description I saw
        <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic', 
                width: '430px',
                textAlign: 'center'
            }}
            placeholder="[specific sentence]" 
        />and I would like some more explanation about that. 
        </span></p>
        
        <p className='ml-4'>- <span className='ml-2'>How can I exceed your expectations?
        </span></p>
        
        <p className='ml-4'>- <span className='ml-2'>What will my onboarding look like? (30,60,90)
        </span></p>

        <p className='ml-4'>- <span className='ml-2'>What are the problems you have today that you would like me to solve?
        </span></p>

        <p className='ml-4'>- <span className='ml-2'>What are the top 3 things you would like to see me do in the first 90 days?
        </span></p>
        
        </span></p>
        </p>

        
      
    </div>
  )
}

export default Interview_Questions
