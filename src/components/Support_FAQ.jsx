import React, { useState } from 'react';
import Question from './Support_FAQ_Question';

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        if (index === activeQuestion) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(index);
        }
    };

    return (
        <div id='FAQ' className='bg-color-faq'>
            <div className='bg-black/50'>
                <div className='py-16 mx-auto w-full px-4 max-w-4xl'>
                    <h1 className='text-4xl py-8 font-bold text-center text-white'>
                        Veelgestelde Vragen
                    </h1>
                    <hr className='py-4 border-b border-[#00df9a]' />

                    <Question
                        index={0}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='1. Waar kan ik FutureEd voor gebruiken als student?'
                        answer='FutureEd is een online platform dat unieke en aantrekkelijke inhoud biedt die niet algemeen wordt onderwezen in traditionele onderwijssystemen.'
                    />

                    <Question
                        index={1}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='2. Wat voor soort onderwerpen worden behandeld in de lessen?'
                        answer='We behandelen meer dan 40 onderwerpen, waaronder budgettering, schuldbeheer, belastingaangifte, kosten voor autos, huisvesting en persoonlijke ontwikkeling.'
                    />

                    <Question
                        index={2}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='3. Wat voor soort onderwerpen worden behandeld in de lessen?'
                        answer='We behandelen meer dan 40 onderwerpen, waaronder budgettering, schuldbeheer, belastingaangifte, kosten voor autos, huisvesting en persoonlijke ontwikkeling.'
                    />

                    <Question
                        index={3}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='4. Op welke manier worden de lessen gegeven?'
                        answer='De lessen worden gegeven door middel van korte en beelgevende kennis clips. Daarnaast bieden we ook interactieve opdrachten aan.'
                    />

                    <Question
                        index={4}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='5. Voor wie zijn deze lessen bedoeld?'
                        answer='De lessen zijn bedoeld voor middelbare scholieren en studenten in beroeps- of wetenschappelijk onderwijs.'
                    />

                    <Question
                        index={5}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='6. Wat zijn de vereisten om deel te nemen aan de lessen?'
                        answer='Er zijn geen vereisten! Iedereen kan deelnemen ongeacht academische vaardigheden.'
                    />

                    <Question
                        index={6}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='7. Is het mogelijk om de lessen aan te bieden in mijn onderwijsinstelling?'
                        answer='Ben je onderdeel van een onderwijsinstelling en lijken onze lesmodules je interessant? Neem dan contact met ons op om de beste opties te bespreken voor jouw school.'
                    />

                    <Question
                        index={7}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='8. Kunnen er andere AI features of lesmodules worden gemaakt voor mijn onderwijsinstelling?'
                        answer='Ja, we kunnen andere AI features en lesmodules maken voor jouw onderwijsinstelling. Neem contact met ons op zodat we samen ervoor kunnen zorgen dat jouw studenten de beste leerervaring krijgen en jouw school zich kan onderscheiden.'
                    />

                    <Question
                        index={8}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='9. Hoe kan ik me aanmelden voor de lesmodules en wanneer zullen deze plaatsvinden?'
                        answer='Je kunt je aanmelden door in te schrijven op de wachtlijst. Degene die vroegtijdig aanmelden, krijgen tot 70% korting!'
                    />

                    <Question
                        index={9}
                        activeQuestion={activeQuestion}
                        handleQuestionClick={handleQuestionClick}
                        question='10. Is er een deadline om me aan te melden voor de lesmodule?'
                        answer='Er is geen deadline om je aan te melden, maar de korting is beperkt tot de eerste 500 aanmeldingen. Dus wees er snel bij!'
                    />

               
                    {/* <Question 
                        question='1. What is FutureEd and what service does it offer?' 
                        answer='FutureEd is an online business that specializes in AI-based technologies to improve your studying efficiency. We also provide unique  and engaging content that is not generally taught in traditiona; education systems' 
                    />

                    <Question
                        question='2. What is the difference between FutureEd and other online learning platforms?'
                        answer='FutureEd is a platform that provides a unique and engaging learning experience. We provide content that is not generally taught in traditional education systems. We also provide a variety of tools to help you learn more efficiently.'
                    />

                    <Question   
                        question='3. How does FutureEd’s AI technology work? '
                        answer='FutureEd’s AI technology is based on the concept of spaced repetition. Spaced repetition is a learning technique that involves repeatedly studying something over a period of time. The AI technology will help you learn more efficiently by providing you with the right content at the right time.'
                    />

                    <Question
                        question='4. Is there a free trial or demo version available?'
                        answer='Yes, we offer a free trial for all of our products. You can sign up for a free trial on our website.'
                    />

                    <Question
                        question='5. Is there a mobile app available for FutureEd?'
                        answer='No we do not have a mobile app available at this time. However, you can access our website on your mobile device.'
                    /> */}

                </div>
            </div>
        </div>
    );
};

export default Faq;