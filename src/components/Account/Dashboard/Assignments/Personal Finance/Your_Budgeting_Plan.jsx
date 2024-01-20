import React from 'react'

const Your_Budgeting_Plan = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <p className='mb-8'>Now it's your turn to create a budget that matches your financial situation. If you want a framework to guide you, we recommend using the 50/30/20 rule.</p>

      <p className='mb-4'> So we want you the answer the following questions:</p>

      <p className='mb-4'> Determine your monthly living expenses: €
      <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/>
      </p>

      <p className='mb-4'> Calculate what you spent on average on "fun" in the last 3 months: €
      <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/>
      </p>

      <p className='mb-4'> How much do you put aside per month for Saving and/or Investing? €
      <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/>
      </p>

      <p className='mb-4'> Determine your ratio; Living costs:
      <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/>
        
        <span className='ml-3'>Fun:
        <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/>
        </span>

        <span className='ml-3'>Investment:
        <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/>
        </span>
      </p>

      <p className='mb-4'> What is the ideal ratio you would like to have; Living costs:
      <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/>
        
        <span className='ml-3'>Fun:
        <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/>
        </span>

        <span className='ml-3'>Investment:
        <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/>
        </span>
      </p>

      <p className='mb-4'> How much is that in €; Living costs: €
      <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/>
        
        <span className='ml-3'>Fun: €
        <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/>
        </span>

        <span className='ml-3'>Investment: €
        <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/>
        </span>
      </p>
    </div>
  )
}

export default Your_Budgeting_Plan
