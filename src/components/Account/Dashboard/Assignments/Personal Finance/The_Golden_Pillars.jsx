import React from 'react'

const The_Golden_Pillars = () => {
  const fileName = 'The Golden Pillars & Budget Plan.docx';
  const data = [
    { date: "1-2-2024", netIncome: "€600", livingExpense: "€300", funExpense: "€120", saving: "€180", totalSaved: "€180" },
    { date: "1-3-2024", netIncome: "€600", livingExpense: "€280", funExpense: "€120", saving: "€200", totalSaved: "€380" },
    { date: "1-4-2024", netIncome: "€700", livingExpense: "€350", funExpense: "€140", saving: "€210", totalSaved: "€590" },
    { date: "1-5-2024", netIncome: "€x", livingExpense: "€x", funExpense: "€x", saving: "€x", totalSaved: "€x" },
  ];

  const data1 = [
    { debt: "Credit card", percentage: "4", euros: "600" },
    { debt: "Student loan", percentage: "2.45", euros: "10000" },
    { debt: "......", percentage: "", euros: "" },
  ];
  
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
      <p className='mb-8'>Now it is your turn to complete your Golden Pillars! Look at what stage you are at and from there make a plan and follow the roadmap until you have completed all the Golden Pillars. So before you start conquering the Golden Pillars, we want you to have a (budget) plan. If you want a framework to guide you, we recommend the 50/30/20 rule.</p>

      {/* <p className='mb-4'> So we want you the answer the following questions:</p> */}

      <p className='mb-4'> Determine your monthly living expenses: €
      {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
      </p>

      <p className='mb-4'> Calculate your monthly average fun expenses: €
      {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
      </p>

      <p className='mb-4'> Determine your monthly Saving Investing: €
      {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
      </p>

      <p className='mb-4'> Determine your current ratio;
      <div className='mb-2 mt-5'> 
        <span className='italic'>Living costs:</span>
      {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
      </div>
      <div className='mb-2'>
        <span className='italic'>Fun:</span>
      {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
      </div>
      <div>
        <span className='italic'>Investment/Saving:</span>
      {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
      </div>
      
        
      </p>

      <p className='mb-4 font-bold'> What is the ideal ratio / salary you would like to have?; 
      <div className='mt-4 font-normal italic'> 
        Living costs:
      {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/> */}
        
        <span className='ml-3'>Fun:
        {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/> */}
        </span>

        <span className='ml-3'>Investment:
        {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder="%"/> */}
        </span>
      </div>
      
      </p>

      <p className='mb-12'> How much is that in €; Living costs: €
      {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
        
        <span className='ml-3'>Fun: €
        {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
        </span>

        <span className='ml-3'>Investment: €
        {/* <input
        type="text"
        style={{
            width: '80px', 
            padding: '4px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            marginLeft: '4px', 
        }}
        placeholder=""/> */}
        </span>
        <p className='mt-4'>Work towards this salary :)</p>
      </p>

      <h1 className='font-bold mb-4'>The First Golden Pillar: Saving €1.000</h1>
      <p className='mb-4'>Now that you have a budget plan, you can plan out how much you are going to save and invest each month to complete the Golden Pillars.</p>
      <p className='font-bold mb-4'> Step 1: <span className='ml-2 font-normal'>Make an Emergency Fund in your bank account, specifically for this €1.000.</span></p>
      <p className='font-bold mb-4'> Step 2: <span className='ml-2 font-normal'>Save up €1.000! </span></p>
      <p className='mb-4'>You can use the next table to keep a nice overview and track your progress.</p>
      <table>
      <thead>
        <tr>
          <th className='font-normal'>Date</th>
          <th className='font-normal'>Net Income</th>
          <th className='font-normal'>Living expense</th>
          <th className='font-normal'>Fun expense</th>
          <th className='font-normal'>Saving</th>
          <th className='font-normal'>Total saved up</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td><em>{row.date}</em></td>
            <td className="font-bold">{row.netIncome}</td>
            <td className="font-bold">{row.livingExpense}</td>
            <td className="font-bold">{row.funExpense}</td>
            <td className="font-bold">{row.saving}</td>
            <td className="font-bold">{row.totalSaved}</td>
          </tr>
        ))}
      </tbody>
    </table>

      <p className='font-bold mt-4 mb-12'> Step 3: <span className='ml-2 font-normal'>Avoid using this fund!</span></p>

      <h1 className='font-bold mb-4'>The Second Golden Pillar: Becoming Debt-Free</h1>
      <p className='font-bold mb-4'> Step 1: <span className='ml-2 font-normal'>Create a list of all your current debts and their monthly interest.</span></p>
      <table>
      <thead>
        <tr>
          <th className='font-normal'>Debt</th>
          <th className='font-normal'>%</th>
          <th className='font-normal'>€</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((row, index) => (
          <tr key={index}>
            <td><em>{row.debt}</em></td>
            <td className="font-bold">{row.percentage}</td>
            <td className="font-bold">{row.euros}</td>

          </tr>
        ))}
      </tbody>
    </table>
      <p className='font-bold mt-4 mb-4'> Step 2: <span className='ml-2 font-normal'>Stop buying things you don't need. </span></p>
      <p className='font-bold mb-4'> Step 3: <span className='ml-2 font-normal'>Prioritize paying off debt. (Pay off the debt with the highest percentage first, or the debt with the shortest repayment time)</span></p>
      <p className='font-bold mb-12'> Step 4: <span className='ml-2 font-normal'>Make sure you prevent going back into debt. </span></p>

      <h1 className='font-bold mb-4'>The Third Golden Pillar: Saving up 6 months of Living Expenses</h1>
      <p className='font-bold mb-2'> Step 1: <span className='ml-2 font-normal'>Calculate your monthly expenses.</span></p>
      <p className='mb-4'>Let's say your rent is €500, your car is €100, food is €200, insurance is €100, and other bills like Spotify, Netflix and a gym add up to €100. In this situation your living expenses are €1.000.</p>
      <p className='font-bold mb-2'> Step 2: <span className='ml-2 font-normal'>Multiply your living expenses x 6</span></p>
      <p className='mb-4'>Using the example from Step 1, your goal will be €6.000.</p>
      <p className='font-bold mb-4'> Step 3: <span className='ml-2 font-normal'>Use the same method as with pillar 1 to save this up.</span></p>
      <div className='mb-12'>
        <table>
        <thead>
          <tr>
            <th className='font-normal'>Date</th>
            <th className='font-normal'>Net Income</th>
            <th className='font-normal'>Living expense</th>
            <th className='font-normal'>Fun expense</th>
            <th className='font-normal'>Saving</th>
            <th className='font-normal'>Total saved up</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td><em>{row.date}</em></td>
              <td className="font-bold">{row.netIncome}</td>
              <td className="font-bold">{row.livingExpense}</td>
              <td className="font-bold">{row.funExpense}</td>
              <td className="font-bold">{row.saving}</td>
              <td className="font-bold">{row.totalSaved}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  )
}

export default The_Golden_Pillars
