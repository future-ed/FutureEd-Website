import quotes from "../assets/quotes.svg";
import BG from '../assets/bg_school.png';

const feedback = [
    {
        id: 1,
        content: `I have been using FutureEd for a few months now and I am very impressed with the quality of the courses. I have learnt so much from the courses and I am excited to learn more!`,
        title: `So Practical`,
    },
    {
        id: 2,
        content: `I have been using FutureEd for a few months now and I am very impressed with the quality of the courses. I have learnt so much from the courses and I am excited to learn more!`,
        title: `Lifesaving`,
    },
    {
        id: 3,
        content: `I have been using FutureEd for a few months now and I am very impressed with the quality of the courses. I have learnt so much from the courses and I am excited to learn more!`,
        title: `Essential`,
    },
];

const Testimonials = () => (

    <div id='Testimonials' className='w-full bg-white  min-w-screen max-w-screen bg-cover bg-center bg-no-repeat md:h-screen' style={{ backgroundImage: `url(${BG})`,}}>
      <div className='max-w-screen-xl mx-auto py-10 px-4 pt-20 text-center'>
        <h1 className='font-bold text-black text-4xl md:text-5xl mb-4'>
            What People <br className="sm:block hidden" /> Say About Us
        </h1>
        <div className="flex flex-wrap sm:justify-start justify-center items-center w-full feedback-container relative z-[1] pt-10">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
        </div>
      </div>
    </div>
);

export default Testimonials;

const FeedbackCard = ({ content, title }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card  bg-gray-100 text-black">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <h1 className="font-bold text-[24px] leading-[32.4px] text-black mt-10 mb-5">{title}</h1>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {content}
    </p>
  </div>
);