import React from 'react'

const Sleeping_Schedule = () => {
  const fileName = 'Sleeping Schedule.docx';
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
        <p className='mb-8'>Now that we have tested your sleep knowledge, it is time to create your own sleep schedule to optimize your sleep.</p>

        <p className='mb-7'>
          1. What would be an ideal time to go to sleep? 
          <select className='border rounded-lg px-3 py-1 ml-3'>
            <option value=""></option>
          {/* <option>9:00 PM</option>
          <option>9:15 PM</option>
          <option>9:30 PM</option>
          <option>9:45 PM</option>
          <option>10:00 PM</option>
          <option>10:15 PM</option>
          <option>10:30 PM</option>
          <option>10:45 PM</option>
          <option>11:00 PM</option>
          <option>11:15 PM</option>
          <option>11:30 PM</option>
          <option>11:45 PM</option>
          <option>12:00 AM</option>
          <option>12:15 AM</option>
          <option>12:30 AM</option>
          <option>12:45 AM</option>
          <option>1:00 AM</option>
          <option>1:15 AM</option>
          <option>1:30 AM</option>
          <option>1:45 AM</option>
          <option>2:00 AM</option>
          <option>2:15 AM</option>
          <option>2:30 AM</option>
          <option>2:45 AM</option>
          <option>3:00 AM</option> */}
        </select>
        </p>

        <p className='mb-7'>
        2. Dim your lights  
        <select className='border rounded-lg px-3 py-1 ml-3 mr-3'>
          <option value=""></option>
          {/* <option value="">35</option>
          <option value="">45</option>
          <option value="">30</option>
          <option value="">40</option> */}
        </select>
        minutes before bed  
        </p>

        <p className='mb-7'>
        3. What are you going to do 30 minutes before you go to bed? 
          <span className='ml-2' style={{ display: 'inline-flex', alignItems: 'center' }}>
             
            {/* <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid black', 
                outline: 'none',
                marginLeft: '5px', 
                marginRight: '5px',
                width: '100%' 
              }}
            /> */}
          </span>
        </p>

        <p className='mb-7'>
        4. I need to wake up at
        <select className='border rounded-lg px-3 py-1 ml-3'>
            <option value=""></option>
          {/* <option>4:30 AM</option>
          <option>4:45 AM</option>
          <option>5:00 AM</option>
          <option>5:15 AM</option>
          <option>5:30 AM</option>
          <option>5:45 AM</option>
          <option>6:00 AM</option>
          <option>6:15 AM</option>
          <option>6:30 AM</option>
          <option>6:45 AM</option>
          <option>7:00 AM</option>
          <option>7:15 AM</option>
          <option>7:30 AM</option>
          <option>7:45 AM</option>
          <option>8:00 AM</option>
          <option>8:15 AM</option>
          <option>8:30 AM</option>
          <option>8:45 AM</option>
          <option>9:00 AM</option>
          <option>9:15 AM</option>
          <option>9:30 AM</option>
          <option>9:45 AM</option>
          <option>10:00 AM</option>
          <option>10:15 AM</option>
          <option>10:30 AM</option>
          <option>10:45 AM</option>
          <option>11:00 AM</option>
          <option>11:15 AM</option>
          <option>11:30 AM</option>
          <option>11:45 AM</option>
          <option>12:00 AM</option> */}
        </select>
        <p className='italic mt-3'>(Make sure there is 7.5 hours - 9 hours, depending on your sleepcycle duration, between 1. & 3.)</p>
        </p>

        <p className='mb-7'>
        5. At what time are you going to stop drinking caffeine? 
        <select className='border rounded-lg px-3 py-1 ml-3'>
            <option value=""></option>
          {/* <option>10 AM</option>
          <option>2 PM</option>
          <option>1 PM</option>
          <option>12 PM</option> */}
        </select>
        </p>

        <p className='mb-7'>
        6. What should you do first when you wake up? 
        <select className='border rounded-lg px-3 py-1 ml-3'>
            <option value=""></option>
          {/* <option>Go back to sleep</option>
          <option>scroll your phone</option>
          <option>Drink a full glass of water</option>
          <option>Keep lying in bed</option> */}
        </select>
        </p>

        <p className='mb-7'>
        7. When you have a night out with friends how many drinks are you going to have 
        <select className='border rounded-lg px-3 py-1 ml-3'>
            <option value=""></option>
          {/* <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option> */}
        </select>
        </p>
      
    </div>
  )
}

export default Sleeping_Schedule;
