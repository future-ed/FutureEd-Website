import React, { useState } from 'react';

const MultipleQuestions = ({ questionText, options, correctAnswer, className }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setFeedback(option === correctAnswer ? 'correct' : 'incorrect');
  };

  return (
    <div className={className}> 
      <p className='font-bold'>{questionText}</p>
      {options.map((option, index) => (
        <div key={index} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          margin: '8px 0',
        }}>
          <input
            type="radio"
            name="option"
            value={option}
            onChange={() => handleOptionChange(option)}
            style={{ marginRight: '8px', cursor: 'pointer' }} 
          />
          <div style={{ 
            backgroundColor: selectedOption === option ? (feedback === 'correct' ? 'lightgreen' : 'pink') : 'transparent', 
            display: 'inline-block', 
            padding: '0 8px',
            borderRadius: '5px',
          }}>
            <label htmlFor={`option-${index}`}>
              {option}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleQuestions;
        