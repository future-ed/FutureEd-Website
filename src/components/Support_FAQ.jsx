import React from 'react';
import Question from './Support_FAQ_Question';

const Faq = () => {
    return (
        <div id = 'FAQ' className='bg-color-faq'>
            <div className='bg-black/50' >
            <div className='py-16 mx-auto w-full px-4 max-w-4xl'>
                <h1 className='text-4xl py-8 font-bold text-center text-white'>Frequently Asked Questions</h1>
                <hr className='py-4 border-b border-[#00df9a]' />

                <Question
                    question='1. Hoe kan ik FutureEd gebruiken?'
                    answer='FutureEd is een online platform dat AI-gebaseerde technologieën biedt om je studie-efficiëntie te verbeteren. We bieden ook unieke en aantrekkelijke inhoud die niet algemeen wordt onderwezen in traditionele onderwijssystemen.'
                    />

                    <Question
                    question='2. Wanneer zullen de AI features beschikbaar zijn?'
                    answer='De AI features zijn momenteel nog in ontwikkeling. We verwachten dat ze in de loop van april 2023 beschikbaar zullen zijn.'
                    />

                    <Question
                    question='3. Wat voor soort onderwerpen worden behandeld in de lessen?'
                    answer='We behandelen meer dan 40 onderwerpen, waaronder budgettering, schuldbeheer, belastingaangifte, kosten voor autos, huisvesting en persoonlijke ontwikkeling.'
                    />

                    <Question
                    question='4. Wie geven de lessen?'
                    answer='De lessen worden gegeven door de medeoprichters van FutureEd.'
                    />

                    <Question
                    question='5. Voor wie zijn deze lessen bedoeld?'
                    answer='De lessen zijn bedoeld voor middelbare scholieren en studenten in beroeps- of wetenschappelijk onderwijs tussen de 16 en 23 jaar oud.'
                    />

                    <Question
                    question='6. Wat zijn de vereisten om deel te nemen aan de lessen?'
                    answer='Er zijn geen vereisten! Iedereen kan deelnemen ongeacht academische vaardigheden.'
                    />

                    <Question
                    question='7. Waar vinden de lessen plaats?'
                    answer='De lessen vinden online plaats in groepen van 4 studenten en duren gemiddeld 1.5 uur per week.'
                    />

                    <Question
                    question='8. Wat gebeurt er als ik een les mis?'
                    answer='Als je een les mist, krijg je een samenvatting van de afgelopen week en de opdracht(en) die je hebt gemist. Bij de volgende les kun je vragen stellen aan de lesgever.'
                    />

                    <Question
                    question='9. Hoe kan ik me aanmelden voor de lessen en wanneer zullen deze plaatsvinden?'
                    answer='Je kunt je aanmelden door een e-mail te sturen naar contact@future-ed.dev. De lessen voor de eerste groep zullen beginnen in de eerste week van april 2023 en zullen eindigen in de laatste week van juni 2023.'
                    />

                    <Question
                    question='10. Is er een deadline om me aan te melden voor de lessen?'
                    answer='Er is geen deadline om je aan te melden, maar er zijn een beperkt aantal plekken beschikbaar, dus wacht niet te lang om je aan te melden om je plek te garanderen!'
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