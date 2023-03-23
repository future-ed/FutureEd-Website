import React from 'react';
import Question from './Support_FAQ_Question';

const AIContent = () => {
    return (
        <div id = 'ProductAI' className='bg-color-pink'>
            <div className='bg-black/40' >
            <div className='py-16 mx-auto w-full px-4 max-w-4xl'>
                <h1 className='text-4xl py-8 font-bold text-center text-white'>AI Features</h1>
                <hr className='py-4 border-b border-[#00df9a]' />
               
                    <Question 
                        question='1. Rooster generator' 
                        answer=' Upload de gegevens en krijg een rooster terug!'
                        />

                    <Question
                        question='2. Mentor chatbot'
                        answer=' Laat studenten chatten met de chatbot en krijg een rapport terug van elk student!'
                    />

                    <Question   
                        question='3. Op maat gemaakte AI features'
                        answer=' Wij ontwikkelen ook op maat gemaakte AI features voor scholen!'
                    />
                </div>
            </div>
        </div>
    );
};

export default AIContent;