import React from 'react'

const Realtor_Email = () => {
    const fileName = 'Realtor Email.docx';
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
        <p className='mb-5'>Subject: Enthusiastic Student Looking for a Cozy Room - Your Listing Catched My Eye!</p>
        <p className='mb-5'>Dear [Landlord/Tenant Name]<span>
        {/* <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic',
                width: '210px',
                textAlign: 'center'
            }}
            placeholder="[Landlord/Tenant Name]" 
        /> */}
        ,
        </span></p>
        <p className='mb-5'>I hope this email finds you well. My name is [Your Name]<span>
        {/* <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic',
                width: '160px',
                textAlign: 'center'
            }}
            placeholder="[Your Name]" 
        /> */}
        and I recently came across your listing for the room available at [Address/Listing ID]
        {/* <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic',
                width: '350px',
                textAlign: 'center'
            }}
            placeholder="[Address/Listing ID]" 
        /> */}
        . As a student looking for a comfortable place to call home, I couldn't help but be intrigued by the details in your ad.
        </span></p>
        
        <p className='mb-5'>Your description of the room and its amenities perfectly matches what I'm looking for in my next home. The 
        [mention any specific features mentioned in the ad, e.g., spacious closet, natural light, or proximity to campus]<span>
        {/* <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic',
                width: '920px',
                textAlign: 'center'
            }}
            placeholder="[mention any specific features mentioned in the ad, e.g., spacious closet, natural light, or proximity to campus]" 
        /> */}
        are particularly appealing to me.
        </span></p>

        <p className='mb-5'>Allow me to tell you a little about myself - I am a dedicated student who values a quiet and conducive environment for studying [add details that make you seem like a good tenant]<span>
        {/* <input
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
            placeholder="[add details that make you seem like a good tenant]" 
        /> */}
        . Your listing seems to offer just that, and I am excited about the possibility of making a home in such a well-maintained space.
        </span></p>

        <p className='mb-5'>I appreciate the effort you've put into providing detailed information about the property. Could you please provide more details about the lease terms, any additional costs, and the next steps in the application process?</p>
        <p className='mb-5'>I am available to view the property at your earliest convenience and am flexible to accommodate your schedule. Your guidance and insight into the property would be invaluable as I make this important decision.</p>
        <p className='mb-5'>Thank you for your consideration of my application. I look forward to the opportunity to discuss this further and hopefully make [address/listing ID]<span>
        {/* <input
            type="text"
            style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                flex: 1,
                fontStyle: 'italic',
                width: '350px',
                textAlign: 'center'
            }}
            placeholder="[address/listing ID]" 
        /> */}
        my new home.
        </span></p>

        <p className='mb-5'>Sincerely,</p>
        <p className='mb-3'>[Your Full Name]</p>
        <p className='mb-12'>[Your contact information]</p>

        {/* <p className='mb-3'>
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
            placeholder="[Your Full Name]" 
        /> 
        </p>

        <p className='mb-12'>
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
            placeholder="[Your contact information]" 
        />
        </p> */}
        
    </div>
  )
}

export default Realtor_Email
