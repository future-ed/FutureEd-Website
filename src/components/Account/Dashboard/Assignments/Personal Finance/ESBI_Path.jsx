import React from 'react'

const ESBI_Path = () => {
    const headers = ["Time", "Money", "Remote work", "Hypotheek aanvraag", "Other metrics"];
    const rows = ["E", "S", "B", "I"];

  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <p className='mb-8'>
      The purpose of this assignment is to make a temporary decision about the path that aligns with you and your goals. As life progresses, your aspirations may change, and it's normal to adjust accordingly. However, it's important to set a goal and choose a path to move forward. So we want you the answer the following questions:
      </p>

      <div className='mb-8'>
        <h1 className='font-bold'>
            How stress tolerant are you?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>Moderate stress tolerance, prefer a structured environment.</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>High stress tolerance, thrive on challenges and responsibility.</span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>High stress tolerance, thrive on challenges and strategic decision-making.</span></p>
        <p className='font-bold'>I <span className='ml-2 font-normal'>Moderate stress tolerance, focus on long-term strategies, avoid day-to-day stressors.</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
            How comfortable are you with taking risks?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>stability and a guaranteed income</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>taking calculated risks for potential rewards</span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>taking calculated risks for potential rewards</span></p>
        <p className='font-bold'>I <span className='ml-2 font-normal'>taking calculated risks for potential rewards</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        How comfortable are you with the idea of financial risk?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I prefer a more conservative approach</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>I prefer a more conservative approach </span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I'm comfortable taking calculated risks for potential financial rewards</span></p>
        <p className='font-bold'>I <span className='ml-2 font-normal'>I'm comfortable taking calculated risks for potential financial rewards</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        How important is job security to you?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>Job security is a top priority for me</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>I'm willing to trade some security for the potential rewards </span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I'm willing to trade some security for the potential rewards</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        What is your preferred work environment?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>structured and supervised work setting</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>autonomy and flexibility </span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>autonomy and flexibility</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        What is your preference: managing people or being managed?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I prefer being managed and having clear responsibilities</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>I enjoy managing and leading others </span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        What's your preference in terms of career advancement?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I value a defined career path within a company structure</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>I prefer the flexibility to create my own path and define my career trajectory  </span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I prefer the flexibility to create my own path and define my career trajectory </span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        How do you handle the administrative aspects of your work?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I prefer having administrative tasks handled by others</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>I'm comfortable managing administrative responsibilities on my own  </span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I'm comfortable managing administrative responsibilities on my own </span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        How patient are you in waiting for returns on your efforts?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I prefer more immediate returns for my efforts</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>I prefer more immediate returns for my efforts</span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I'm willing to wait for long-term gains and passive income</span></p>
        <p className='font-bold'>I <span className='ml-2 font-normal'>I'm willing to wait for long-term gains and passive income</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        What is your financial goal primarily focused on?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>Stable income to cover living expenses</span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>Wealth accumulation and financial independence</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        How much time are you willing to invest in your work initially and over the long term?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I prefer a standard 40-hour workweek with weekends off</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>I prefer a standard 40-hour workweek  </span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I'm willing to invest extra time (50 - 70+ hours) to build and grow my Business. </span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        How much capital do you have to invest in a business or as an investor?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>Limited capital; I prefer not to risk significant investments</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>Limited capital; I prefer not to risk significant investments</span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I have substantial capital for potential a business or investments</span></p>
        <p className='font-bold'>I <span className='ml-2 font-normal'>I have substantial capital for potential a business or investments</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        What's your level of interest in financial markets and investment strategies?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I have limited interest in financial markets and investment strategies</span></p>
        <p className='font-bold'>I <span className='ml-2 font-normal'>I find financial markets fascinating and enjoy exploring different investment opportunities</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        What's your approach to work-life balance?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I value a clear separation between work and personal life</span></p>
        <p className='font-bold'>S <span className='ml-2 font-normal'>I'm comfortable with a more fluid work-life balance and integrating work into my lifestyle</span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I'm comfortable with a more fluid work-life balance and integrating work into my lifestyle</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
        What is your primary motivation for financial success?
        </h1>
        <p className='font-bold'>E <span className='ml-2 font-normal'>I seek financial success to support my lifestyle and meet immediate needs</span></p>
        <p className='font-bold'>B <span className='ml-2 font-normal'>I aim for financial success to build long-term wealth and achieve financial freedom</span></p>
        <p className='font-bold'>I <span className='ml-2 font-normal'>I aim for financial success to build long-term wealth and achieve financial freedom</span></p>
      </div>

      <div className='mb-8'>
        <h1 className='font-bold'>
            What is your Secondary motivation for financial success?
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
        
        <table className='mb-5'>
        <thead>
            <tr>
            <th></th> {/* Empty top-left cell */}
            {headers.map(header => (
                <th key={header}>{header}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {rows.map(rowLabel => (
            <tr key={rowLabel}>
                <td>{rowLabel}</td> {/* Row labels */}
                {headers.map(header => (
                <td key={header}>
                    <input type="text" /> {/* Input for each cell */}
                </td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>

        <div className='mb-8'>
        <h1 className='font-bold'>
            Which of these metrics are most valuable to you?
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
            <div className='font-bold'>
                As you think about your current circumstances, which category within the ESBI framework do you feel most aligns with your aspirations?
                <div style={{ display: 'inline', marginLeft: '8px' }}>
                    <span className='font-normal italic'>(Make a choice even if you are not sure):</span>
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
                        placeholder=""
                    />
                </div>
            </div>
        </div>



        <div className='mb-8'>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                <h1 className='font-bold' style={{ marginRight: '8px' }}>
                How confident are you in your decision? (0-100%):
                </h1>
                 <input
                    type="text"
                    style={{
                        width: '80px', 
                        padding: '4px', 
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px', 
                    }}
                    placeholder="%" 
                    />
            </div>
        </div>

        <div className='mb-8'>
        <h1 className='font-bold'>
        Why do you think this category best fits your goals? 
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
    </div>
  )
}

export default ESBI_Path
