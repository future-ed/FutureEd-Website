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
                        question='1. Samenvattinggenerator' 
                        answer=' PDF, Video, Audio en meer in een paar klikken tot een samenvatting.' 
                        />

                    <Question
                        question='2. Referentiegenerator'
                        answer=' Stop een tekst in de referentiegenerator en krijg een lijst met bronnen terug.'
                    />

                    <Question   
                        question='3. Meer in de toekomst'
                        answer=' Nog meer features in de toekomst.'
                    />
                </div>
            </div>
        </div>
    );
};

export default AIContent;