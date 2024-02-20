import React from 'react'

const zero_to_ten = () => {
  const goals = [
    { id: "Goal 1.1", description: "Save up €500 emergency fund" },
    { id: "Goal 1.2", description: "Save up €1.000 emergency fund" },
    { id: "Goal 2", description: "Pay off Credit card debt" },
    { id: "Goal 3", description: "Pay off student loans" },
    { id: "Goal 4", description: "Save up 6 months living expenses" },
    { id: "Goal 5.1", description: "Save up €5.000" },
    { id: "Goal 5.2", description: "Save up €10.000" },
    { id: "......", description: "" },
   
  ];

  const data = [
    { col: "Goal 1", milestones: "Save up €500 emergency fund", studentDebt: "19-5-2024 (18 year old)", withoutStudentDebt: "19-5-2024 (18 year old)"},
    { col: "Goal 1", milestones: "Save up €1000 emergency fund", studentDebt: "19-9-2024 (18 year old)", withoutStudentDebt: "19-9-2024 (18 year old)"},
    { col: "Goal 2", milestones: "Pay off Credit card debt", studentDebt: "None", withoutStudentDebt: "None"},
    { col: "Goal 3", milestones: "Pay off student loans", studentDebt: "21-7-2030 (24 years old)", withoutStudentDebt: "None"},
    { col: "Goal 4", milestones: "Save up 6 months living expenses", studentDebt: "21-7-2032 (26 years old)", withoutStudentDebt: "21-7-2026 (20 years old)"},
    { col: "Goal 5", milestones: "Save up €5.000", studentDebt: "21-5-2033 (26 year old)", withoutStudentDebt: "21-7-2028 (22 year old)"},
    { col: "Goal 5", milestones: "Save up €10.000", studentDebt: "21-8-2033 (27 year old)", withoutStudentDebt: "21-7-2030 (24 year old)"},
    { col: "Goal x", milestones: "", studentDebt: "", withoutStudentDebt: ""},
  ];

  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <p className='mb-4'>Now that we've talked about different methods to get from the Golden Pillars to the next goal, the €10.000, it's time to make a plan for your next goal. It's important to make a plan and set a goal because it increases your likelihood of achieving it by allowing you to measure your progress and adjust if necessary.</p>

      <p className='font-bold mb-4'>Step 1: <span className='font-normal'>Start with the end in mind. </span></p>
      <p className='mb-3'>We want you to make a (temporary) decision about how you want to use the 10k, whether it be for experience, knowledge, or further financial goals. </p>
      
      <div className='mb-10'>
        <h1 className='font-bold'>
        My goal is to use the 10k for? 
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

      <p className='font-bold mb-4'>Step 2: <span className='font-normal'>Break it down</span></p>
      <p className='mb-4'>Achieving the €10.000 and the Golden Pillar will be a challenge for most people, so it is important to break down these big goals into smaller ones to make them more attainable.</p>
      <div className='mb-10'>
      <table>
      <tbody>
        {goals.map((goal, index) => (
          <tr key={index}>
            <td><strong>{goal.id}</strong></td>
            <td><em>{goal.description}</em></td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>

      <p className='font-bold mb-4'>Step 3: <span className='font-normal'>Set a time target </span></p>
      <p className='mb-4'>When do you want to achieve the €10.000 and the smaller goals made above? Label a timeframe to the goals to push yourself to achieve them. Plan it out with a timeline like the following example.</p>

      <div className='mb-10'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Milestones</th>
            <th>With student debt</th>
            <th>Without student debt</th>
          </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td><strong>{row.col}</strong></td>
                <td><em>{row.milestones}</em></td>
                <td><em>{row.studentDebt}</em></td>
                <td><em>{row.withoutStudentDebt}</em></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className='font-bold mb-4'>Step 4: <span className='font-normal'>Change your behaviour. </span></p>
      <p className='mb-4'>Everyone can have the same goal, but without action nothing will be accomplished, so we want you to think about the actions you need to take to make sure you can reach your milestones and end up with the €10,000.</p>
      
      <p className='mb-12 font-bold'>What actions are you going to take to hit your milestones? 
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
    </div>
  )
}

export default zero_to_ten
