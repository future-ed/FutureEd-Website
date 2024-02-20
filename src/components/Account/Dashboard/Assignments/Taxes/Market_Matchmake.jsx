import React from 'react'
import Question  from '../MultipleQuestions'

const Market_Matchmake = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
        <p className='mb-4'>Take a person who earns the Dutch average of €40,000 per year (about €3,300 per month) in the Netherlands. Estimate how much they would have left over after taxes for each ESBI category:</p>
        <Question
        questionText="1. Employee: A person who works a 9 - 5 at a tech company."
        options={['€33.000', '€29.000', '€25.000', '€27.000']}
        correctAnswer="€29.000"
        className="mb-6"
        />

        <Question
        questionText="2. Self-Employed: A person who freelances (With deduction but no declaration)"
        options={['€28.000', '€36.000', '€33.000', '€25.000']}
        correctAnswer="€33.000"
        className="mb-6"
        />

        <Question
        questionText="3. Business Owner (VOF): A tech startup CEO."
        options={['€29.000', '€36.000', '€25.000', '€27.000']}
        correctAnswer="€36.000"
        className="mb-6"
        />
        
        <Question
        questionText="4. Investor: A person who invests in stocks (Which capital is above the exemption) "
        options={['€30.400', '€27.800', '€33.500', '€39.200']}
        correctAnswer="€39.200"
        className="mb-12"
        />

        <p className='font-bold mt-4 mb-3'>€80.000 Salary version</p>
        <p className='font-bold mb-3'>Now let’s do the same for a person who is making €80.000. Estimate how much they would have left over after taxes for each ESBI category:</p>
        
        <Question
        questionText="1. Employee: A person who works a 9 - 5 at a tech company."
        options={['€45.600', '€52.800', '€47.800', '€40.500']}
        correctAnswer="€52.800"
        className="mb-6"
        />

        <Question
        questionText="2. Self-Employed: A person who freelances (With deduction but no declaration)"
        options={['€70.000', '€75.000', '€65.000', '€78.000']}
        correctAnswer="€75.000"
        className="mb-6"
        />

        <Question
        questionText="3. Business Owner (VOF): A tech startup CEO."
        options={['€53.000', '€55.000', '€56.000', '€58.000']}
        correctAnswer="€56.000"
        className="mb-6"
        />

        <Question
        questionText="4. Investor: A person who invests in stocks (Which capital is above the exemption) "
        options={['€30.400', '€27.800', '€33.500', '€39.200']}
        correctAnswer="€39.200"
        className="mb-12"
        />

        <p className='mb-4'>The purpose of this assignment is to re-evaluate your decision about the ESBI. Now that you have learned more about the taxes behind the ESBI, and hopefully made some progress toward achieving your Golden Pillars, you may have changed your mind about the path you want to take. So we want you to answer some additional questions.</p>
        <div className='mb-8'>
        <h1 className='font-bold'>
          After reading the text and answering the question which ESBI do you think fits you best? 
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

        <p className='italic mb-4'>Note: As a S and B, you have the option of declaring certain things, which will lower your living expenses and leave you with more money for fun and investments.</p>
        <p className='italic mb-12'>Disclaimer: We have no opinion on which route you choose, it is a personal choice. We hope to show you what you can expect for all paths as much as possible such that you make your own sophisticated choice.</p>
    </div>
  )
}

export default Market_Matchmake
