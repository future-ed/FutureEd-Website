import styles from "../style";
import quotes from "../assets/quotes.svg";
import people01 from "../assets/people1.png";
import people02 from "../assets/people2.png";
import people03 from "../assets/people3.png";

const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Student, VWO 6",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Director of Leonardo College",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Consultant",
      img: people03,
    },
  ];

  const FeedbackCard = ({ content, name, title, img }) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>
  
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-white text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );

const Reviews = () => (
    <div className={`bg-primary mx-auto ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient bottom-40" />

    <div className="lg:col-span-2 my-4">
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>
        What People are saying about us
      </h1>
    </div>

    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
    </div>
    </div>
);

export default Reviews;