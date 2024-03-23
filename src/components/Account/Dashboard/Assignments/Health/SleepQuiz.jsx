import React from 'react'
import Question from '../MultipleQuestions'

const SleepQuiz = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <p className='mb-8'>We begin the sleep section with a general sleep quiz to test your knowledge and give you some sleep facts you can use in your sleep program.</p>

      <Question
        questionText="1. What is more harmful for sleep quality?"
        options={['Going to sleep hungry', 'Sleeping after eating', 'Both are equally harmful', 'Neither affects sleep quality significantly']}
        correctAnswer="Both are equally harmful"
        className="mb-6"
    />

    <Question
        questionText="2. What is more beneficial before a math exam for optimal performance?"
        options={['Pulling an all-nighter to study', 'Getting a good night’s rest', 'Combining short naps with late-night studying', 'Drinking caffeinated beverages throughout the night']}
        correctAnswer="Getting a good night’s rest"
        className="mb-6"
    />

    <Question
        questionText="3. What did a good sleep routine and a protein-filled breakfast accomplish?"
        options={['Reduced 40% of people having depression', 'Increased the likelihood of having vivid dreams', 'Enhanced memory recall', 'No significant impact on mental health or cognitive function']}
        correctAnswer="Reduced 40% of people having depression"
        className="mb-6"
    />

    <Question
        questionText="4. Which of the following activities is generally recommended before bedtime to promote better sleep?"
        options={['Intense workout', 'Watching TV or using electronic devices', 'Reading a book', 'Consuming a large meal']}
        correctAnswer="Reading a book"
        className="mb-6"
    />

    <Question
        questionText="5. What is the average recommended amount of sleep for Young Adults for optimal health and performance?"
        options={['4-6 hours', '7-9 hours', '10-12 hours', '13-15 hours']}
        correctAnswer="7-9 hours"
        className="mb-6"
    />

    <Question
        questionText="6. How does exposure to natural light during the day impact sleep quality?"
        options={['It has no effect on sleep', 'Improves sleep quality', 'Worsens sleep quality', 'Induces nightmares']}
        correctAnswer="Improves sleep quality"
        className="mb-6"
    />

    <Question
        questionText="7. Which of the following beverages is generally not recommended close to bedtime for better sleep?"
        options={['Herbal tea', 'Warm milk', 'Caffeinated coffee', 'Cherry juice']}
        correctAnswer="Caffeinated coffee"
        className="mb-6"
    />

    <Question
        questionText="8. How does consistent sleep deprivation affect cognitive function?"
        options={['Enhances memory', 'Improves decision-making', 'Impairs concentration and memory', 'Boosts creativity']}
        correctAnswer="Impairs concentration and memory"
        className="mb-6"
    />

    <Question
        questionText="9. What is the term for the natural, internal process that regulates the sleep-wake cycle and repeats roughly every 24 hours?"
        options={['Circadian rhythm', 'Sleep cycle', 'REM cycle', 'Melatonin cycle']}
        correctAnswer="Circadian rhythm"
        className="mb-6"
    />

    <Question
        questionText="10. How does alcohol consumption before bedtime typically affect the different stages of sleep?"
        options={['Deepens REM sleep', 'Increases the duration of slow-wave sleep', 'Disrupts REM sleep and overall sleep quality', 'Induces lucid dreaming']}
        correctAnswer="Disrupts REM sleep and overall sleep quality"
        className="mb-6"
    />

    <Question
        questionText="11. How does screen time on electronic devices before bedtime affect the production of the sleep-inducing hormone melatonin?"
        options={['Increases melatonin production', 'Decreases melatonin production', 'No impact on melatonin production', 'Only affects morning melatonin levels']}
        correctAnswer="Decreases melatonin production"
        className="mb-6"
    />

    <Question
        questionText="12. What is the recommended duration for a power nap to boost alertness and cognitive performance without causing sleep inertia?"
        options={['5 minutes', '15-20 minutes', '30 minutes', '1 hour']}
        correctAnswer="15-20 minutes"
        className="mb-6"
    />   
    </div>
  )
}

export default SleepQuiz
