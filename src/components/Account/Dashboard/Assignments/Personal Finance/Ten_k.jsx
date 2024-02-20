import React from 'react'

const Ten_k = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
        <p className='mb-6'>Now that we have talked about the different ways you can use your earned €10.000, we want you to make a decision about how you want to use it for your goals in life, be it experience, knowledge or finances.</p>
        <p className='mb-6'>So we want you the answer the following questions:</p>
        <p>Which method will you choose?
        <textarea
            style={{
                width: '100%', 
                padding: '8px', 
                margin: '8px 0', 
                display: 'block', // Changed to block for better control
                border: '1px solid #ccc', 
                borderRadius: '4px', 
                boxSizing: 'border-box',
                resize: 'vertical',
                minHeight: '50px', 
            }}
            placeholder="Enter your answer here"
        ></textarea>
        </p>
      
    </div>
  )
}

export default Ten_k
