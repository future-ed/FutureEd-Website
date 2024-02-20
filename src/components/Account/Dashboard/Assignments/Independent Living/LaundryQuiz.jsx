import React from 'react'
import Question from '../MultipleQuestions'

const LaundryQuiz = () => {
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
    <Question
        questionText="1. What is the first step in doing laundry?"
        options={['Sorting clothes', 'Adding detergent', 'Turning on the washing machine']}
        correctAnswer="Sorting clothes"
        className="mb-6"
    />

    <Question
        questionText="2. How should you sort your laundry before washing?"
        options={['Sort by color and fabric type', 'Wash everything', 'Sort only by color', 'Sort only by fabric type']}
        correctAnswer="Sort by color and fabric type"
        className="mb-6"
    />

    <Question
        questionText="3. Why is it important to check clothing labels before washing? "
        options={['To see if the clothes are trendy', 'To determine the appropriate washing instructions', 'To decide if the clothes need ironing']}
        correctAnswer="To determine the appropriate washing instructions"
        className="mb-6"
    />

    <Question
        questionText="4. What should you check before tossing your clothes into the washing machine?"
        options={['Pockets for loose change or items', 'The color of your clothes', 'The detergent in the washer']}
        correctAnswer="Pockets for loose change or items"
        className="mb-6"
    />

    <Question
        questionText="5. If you're unsure about the correct water temperature for a new clothing item, what's the safest option? "
        options={['Wash it in hot water', 'Wash it in cold water', 'Water temperature is not important']}
        correctAnswer="Wash it in cold water"
        className="mb-6"
    />

    <Question
        questionText="6. What is the recommended way to dry delicate clothing items?"
        options={['Use the high heat setting', 'Hang them to air dry', 'Dry them in direct sunlight']}
        correctAnswer="Hang them to air dry"
        className="mb-6"
    />

    <Question
        questionText="7. What should you do if you accidentally mix colors and whites in the same load?"
        options={['There is no way to fix it', 'Re-wash the entire load with color catchers', 'Add bleach to the load to prevent color bleeding']}
        correctAnswer="Re-wash the entire load with color catchers"
        className="mb-6"
    />

    <Question
        questionText="8. If you have a busy schedule, what feature on the washing machine can help save time?"
        options={['Soak cycle', 'Delayed start', 'Extra rinse', 'Heavy-duty cycle']}
        correctAnswer="Delayed start"
        className="mb-6"
    />

    <Question
        questionText="9. How much laundry detergent should you use for a regular-sized load of laundry?"
        options={['A capful', 'Two capfuls', 'It depends on the items']}
        correctAnswer="A capful"
        className="mb-6"
    />

    <Question
        questionText="10. What is the purpose of adding fabric softener to the laundry?"
        options={['To remove stains', 'To reduce static and soften fabrics', 'To speed up the drying process']}
        correctAnswer="To reduce static and soften fabrics"
        className="mb-6"
    /> 

    <Question
        questionText="11. What is the best practice for dealing with stained clothing before washing?"
        options={['Wash the stain immediately with hot water', 'Apply stain remover and let it sit before washing', 'Ignore the stain; it will come out in the wash']}
        correctAnswer="Apply stain remover and let it sit before washing"
        className="mb-6"
    />

    <Question
        questionText="12. What is the purpose of pre-soaking laundry?"
        options={['To speed up the drying process', 'To soften fabrics', 'To remove tough stains', 'It is not necessary for most laundry']}
        correctAnswer="To remove tough stains"
        className="mb-6"
    />

    <Question
        questionText="13. What's a quick tip for dealing with wrinkles if you don't have an iron or steamer?"
        options={['Hang clothes in the bathroom while taking a hot shower', 'Leave clothes in a heap on the floor for a day', 'Spray clothes with a little water and let them air dry', 'Use a hairdryer on the wrinkled areas']}
        correctAnswer="Hang clothes in the bathroom while taking a hot shower"
        className="mb-6"
    />

    <Question
        questionText="14. How can you save on laundry detergent costs?"
        options={['Use the "quick wash" setting to save detergent', 'Only use detergent for heavily soiled clothes', 'Buy detergent in bulk to get a discount']}
        correctAnswer="Buy detergent in bulk to get a discount"
        className="mb-6"
    />

    <Question
        questionText="15. What's a good practice to prevent losing socks in the laundry?"
        options={['Wash socks separately from other clothes', 'Use a laundry bag for socks', 'Only buy socks in matching pairs', 'It is normal to lose socks; do not worry about it']}
        correctAnswer="Use a laundry bag for socks"
        className="mb-12"
    />
             
    </div>
  )
}

export default LaundryQuiz
