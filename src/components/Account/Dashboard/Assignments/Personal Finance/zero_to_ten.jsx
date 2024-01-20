import React from 'react'

const zero_to_ten = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <p className='mb-3'>Now that we have talked about how you can get from 0 to 10k, we want you to start with the right mentality, the right goal, and think about how you are going to get to that 10k goal.</p>
      <p className='mb-3'>So we want you the answer the following questions:</p>
      <p className='mb-6'>What matters to you?
      <textarea
            style={{
                width: '100%', 
                padding: '8px', 
                margin: '8px 0', 
                display: 'block', 
                border: '1px solid #ccc', 
                borderRadius: '4px', 
                boxSizing: 'border-box',
                resize: 'vertical',
                minHeight: '50px', 
            }}
            placeholder="Enter your answer here"
        ></textarea></p>

       <p className='mb-6'>How much money do you want to have after graduation?
       <input
            type="text"
            style={{
                width: '80px', 
                padding: '4px', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px', 
            }}
            placeholder="" 
            className='ml-2'
            />
        </p>

        <p className='mb-6'>How are you going to achieve this?
        <textarea
                style={{
                    width: '100%', 
                    padding: '8px', 
                     margin: '8px 0', 
                    display: 'block', 
                    border: '1px solid #ccc', 
                    borderRadius: '4px', 
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    minHeight: '50px', 
                }}
                placeholder="Enter your answer here"
        ></textarea>
        </p>

        <p>Take time and work out your plan!</p>
    </div>
  )
}

export default zero_to_ten
