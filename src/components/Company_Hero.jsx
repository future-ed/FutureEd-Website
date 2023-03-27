import styles from "../style";
import robot from "../assets/robot.png";

const HeroCompany = () => {
  return (
    <div id = 'About' className={`bg-primary mx-auto ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-8 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Van <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Studenten</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Voor studenten
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        Onze missie is om studenten te voorzien van praktische kennis en vaardigheden die ze nodig hebben voordat ze de arbeidsmarkt en maatschappij betreden. 
        Daarnaast helpen we scholen met AI-gedreven tools om het onderwijs te moderniseren. Op deze manier helpen we docenten en scholen zich te concentreren op wat echt belangrijk is: 
        het begeleiden van studenten.
        
        
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
    </div>
</div>
  );
};

export default HeroCompany;