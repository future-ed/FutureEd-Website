import React from 'react'

const Sleeping_Schedule = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
        <p className='mb-3'>Create a personal sleep schedule:</p>

        <p className='mb-3'>
          Determine an ideal bedtime that fits your schedule: 
          <span className='ml-2' style={{ display: 'inline-flex', alignItems: 'center' }}>
            "I go to bed at 
            <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                marginLeft: '5px', 
                marginRight: '5px',
                width: '30%' 
              }}
            />
            ".
          </span>
        </p>

        <p className='mb-3'>
        Dim your lights and turn off your screen 30 minutes before you go to sleep: I dim my lights and turn off my screen at 
            <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                marginLeft: '5px', 
                marginRight: '5px',
                width: '10%' 
              }}
            />
            and then go to 
            <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                marginLeft: '5px', 
                marginRight: '5px',
                width: '15%'
              }}
            />
            before I go to sleep. 
        </p>

        <p className='mb-3'>
        Set a fixed time (7.5/9 hours after going to bed) to get up: "I get up at 
          <span className='ml-2' style={{ display: 'inline-flex', alignItems: 'center' }}>
             
            <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                marginLeft: '5px', 
                marginRight: '5px',
                width: '30%' 
              }}
            />
            every day."
          </span>
        </p>

        <p className='mb-3'>
        After I wake up, I drink
            <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                marginLeft: '5px', 
                marginRight: '5px',
                width: '10%' 
              }}
            />
            glasses of water." "After 2 p.m., I switch from caffeine to  
            <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
                marginLeft: '5px', 
                marginRight: '5px',
                width: '15%'
              }}
            />
            ."
        </p>

        <p className='mb-3'>
        "When I have drinks with friends, I limit myself to a maximum of 
            <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                marginLeft: '5px', 
                marginRight: '5px',
                width: '10%' 
              }}
            />
            drinks and drink the same number of glasses of water."
        </p>
      
    </div>
  )
}

export default Sleeping_Schedule;
