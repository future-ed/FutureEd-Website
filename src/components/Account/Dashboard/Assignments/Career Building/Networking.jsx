import React from 'react'

const Networking = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
     <p>Make a list of the most important people or the richest people you know:</p>
     <ol className="custom-list"> 
      {Array.from({ length: 10 }, (_, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', listStyleType: 'none' }}>
          <span style={{ marginRight: '0.5rem' }}>{index + 1}</span>
          <input
            type="text"
            style={{
              border: 'none',
            //   borderBottom: '1px solid black',
              outline: 'none',
              flex: 1, 
            }}
            placeholder="______________"
          />
        </li>
      ))}
    </ol>

    <div className='mb-8 mt-5'>
        <h1 className=''>
        How can they help you move forward in life?
        </h1>
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
    </div>

    <div className='mb-8'>
        <h1 className=''>
        How can you offer these people value?
        </h1>
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
    </div>

    <p className='mb-12'>Reach out to these people by providing value first.</p>
    </div>
  )
}

export default Networking
