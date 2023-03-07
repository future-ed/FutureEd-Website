import React from 'react';
import Question from './Support_FAQ_Question';

const ModulesContent = () => {
    return (
        <div id = 'ProductModule' className='bg-color-purple'>
            <div className='bg-black/60' >
            <div className='py-16 mx-auto w-full px-4 max-w-4xl'>
                <h1 className='text-4xl py-8 font-bold text-center text-white'>Lesmodules</h1>
                <hr className='py-4 border-b border-[#00df9a]' />
               
                <Question 
                        question='1. Persoonlijke financiën' 
                        answer=' Deze module focust op de basis van persoonlijke financiën. Ongeacht of je al ervaring hebt of niet, deze module bevat handige informatie voor iedereen. Hierbij behandelen we onderwerp zoals:
                        - Planning van je financiële toekomst
                        - Budgetteringstechnieken
                        - Productieve leningen en schuldbeheer
                        - Vormen van inkomen
                        - Ontdekken welke manieren van geld te verdienen bij jou passen
                        - En nog veel meer!'
                        
                        />

                    <Question
                        question='2. Belastingen'
                        answer=' Bij deze module leer je de basis van belastingen. Hierbij behandelen we onderwerp zoals:
                        - Loonbelasting
                        - Inkomstenbelasting
                        - Dividendbelasting
                        - Verband tussen loon en belasting
                        - Belasting verband tussen ZZP, VOF en BV
                        - Hoe kun je belasting in je voordeel gebruiken?
                        - Belastingsaangifte uitgelegd
                        - En nog veel meer!'
                    />

                    <Question   
                        question='3. Auto & Huis & Op kamers '
                        answer=' Bij deze module leer je hoe het zit met auos, huis en op kamers gaan. Hierbij behandelen we onderwerp zoals:
                        - Autoverzekeringen
                        - Huisverzekeringen
                        - Process doorlopen van een huis of auto kopen
                        - Kosten van verschillende opties
                        - Op kamers gaan wonen en de kosten
                        - Welke rechten heb je als huurder?
                        - En nog veel meer!'
                    />

                    <Question
                        question='4. Verzekeringen'
                        answer=' Bij deze module leer je de basis van verzekeringen die jij wellicht tegen gaat komen in het leven. Hierbij behandelen we onderwerp zoals:
                        - Zorgverzekeringen
                        - Aansprakelijkheidsverzekeringen
                        - Reisverzekeringen
                        - UWV
                        - En nog meer!'
                    />

                    <Question
                        question='5. Pensioen'
                        answer=' Bij deze module leer je hoe pensioen werkt en hoe je er voor kan voorbereiden. Hierbij behandelen we onderwerp zoals:
                        - Staatspensioen
                        - Aanvullend pensioen
                        - Hoe zit het met je belastingen?
                        - Alternateive opties?
                        - En nog meer!'
                    />
                    
                    <Question
                        question='6. Persoonlijke ontwikkeling'
                        answer=' Bij deze module leer je jezelf ontwikkelen en ontdekken hoe je alle geleerde stof tot nu toe kunt gebruiken in je leven. Hierbij behandelen we onderwerp zoals:
                        - Jezelf leren kennen 
                        - Technieken om je productiviteit te verhogen
                        - Werk-privé balans
                        - Hoe bereik je je doelen?
                        - En nog meer!'
                    />
                </div>
        </div>
        </div>
    );
};

export default ModulesContent;