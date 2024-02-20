import React from 'react'
import Question from '../MultipleQuestions'

const CleaningQuiz = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <Question
        questionText="1. How often should you change your bed sheets?"
        options={['Every month', 'Every two weeks', 'Every week', 'Every day']}
        correctAnswer="Every week"
        className="mb-6"
    />

    <Question
        questionText="2. What is the recommended frequency for changing pillowcases?"
        options={['Every month', 'Every two weeks', 'Every week', 'Every day']}
        correctAnswer="Every week"
        className="mb-6"
    />

    <Question
        questionText="3. How often should you replace your toothbrush for optimal oral hygiene?"
        options={['Every month', 'Every two months', 'Every three months', 'Only when the bristles start falling out']}
        correctAnswer="Every three months"
        className="mb-6"
    />

    <Question
        questionText="4. How frequently should you vacuum high-traffic areas in your home?"
        options={['Once a week', 'Twice a month', 'Once a month', 'Only when visible dirt is present']}
        correctAnswer="Once a week"
        className="mb-6"
    />

    <Question
        questionText="5. How often should you clean your computer keyboard and mouse?"
        options={['Once a month', 'Every three months', 'Twice a year', 'Once a year']}
        correctAnswer="Once a month"
        className="mb-6"
    />

    <Question
        questionText="6. How often should you clean your study or work desk to maintain a conducive and organized workspace?"
        options={['Every day', 'Twice a week', 'Once a week', 'Only when it gets cluttered']}
        correctAnswer="Once a week"
        className="mb-6"
    />

    <Question
        questionText="7. What is the best method for cleaning up a small kitchen spill or stain quickly?"
        options={['Wipe it with a damp cloth immediately', 'Let it dry and clean it later', 'Use a sponge or absorbent material to soak up the spill']}
        correctAnswer="Wipe it with a damp cloth immediately"
        className="mb-6"
    />

    <Question
        questionText="8. What's a quick and effective way to freshen up your living space without using air fresheners?"
        options={['Open windows for ventilation', 'Burn scented candles', 'Use a fabric spray on furniture']}
        correctAnswer="Open windows for ventilation"
        className="mb-6"
    />

    <Question
        questionText="9. Your stovetop has grease splatters from cooking. What's the best way to clean them quickly?"
        options={['Leave them to dry and clean later', 'Use a damp cloth and soap', 'Use a paper towel']}
        correctAnswer="Use a damp cloth and soap"
        className="mb-6"
    />

    <Question
        questionText="10. You accidentally spilled coffee on your carpet. How should you address the stain promptly?"
        options={['Apply a mixture of mild dish soap and water to the stained area.', 'Rinse the area with clean water and blot dry with a towel.', 'Sprinkle salt over the coffee stain and let it sit for an hour before vacuuming it up.']}
        correctAnswer="Apply a mixture of mild dish soap and water to the stained area."
        className="mb-6"
    />

    <Question
        questionText="11. Your bathroom mirror has toothpaste splatters. What's the quickest way to clean them for a clear reflection?"
        options={['Use a rough scrubber to aggressively remove the toothpaste splatters.', 'Wipe them immediately with a damp cloth.', 'Apply vinegar directly onto the mirror to dissolve the stains.']}
        correctAnswer="Wipe them immediately with a damp cloth."
        className="mb-6"
    /> 

    <Question
        questionText="12. There's a funky smell coming from your garbage disposal. How do you eliminate the odor?"
        options={['Drop a slice of raw onion into the disposal and run cold water to eliminate the funky smell.', 'Place a few mothballs down the garbage disposal and run cold water to quickly eliminate the odor.', 'Pour a mixture of baking soda and vinegar down the disposal.']}
        correctAnswer="Pour a mixture of baking soda and vinegar down the disposal."
        className="mb-6"
    />

    <Question
        questionText="13. You notice fingerprints on your stainless steel appliances. What's the quickest way to make them shine again?"
        options={['Apply a layer of mayonnaise on the stainless steel surface, let it sit for a while, and then wipe it off with a dry cloth for a rapid shine.', 'Dip a cloth in cola and use it to wipe off the fingerprints on the stainless steel appliances for a speedy shine.', 'Wipe them with a damp microfiber cloth']}
        correctAnswer="Wipe them with a damp microfiber cloth"
        className="mb-6"
    />  
    
    </div>
  )
}

export default CleaningQuiz
