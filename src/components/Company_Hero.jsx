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
        {/* Our mission is to provide you with cutting-edge technology based solutions to enhance your learning efficiency.  
        With our AI-powered educational tools you can focus on what really matters for your educational life and learn much faster.  
        Furthermore, we find it extremely important that every student, regardless of their academic excellence is well-prepared for the future with our fun and engaging content modules. 
        We strive to deliver top-notch quality content that is easy to understand at an affordable price for every student.  */}
        Onze missie is om je te voorzien van op technologie gebaseerde oplossingen om je leer efficiëntie te verbeteren.
        Met onze AI-gestuurde educatieve tools kun je je richten op wat er echt toe doet voor je studie en veel sneller leren.
        Daarnaast vinden we het erg belangrijk dat elke student, ongeacht hun academische excellentie, goed voorbereid is op de toekomst met onze leuke en aansprekende lesmodules.
        We streven ernaar om topkwaliteit inhoud te leveren die gemakkelijk te begrijpen is tegen een betaalbare prijs voor elke student.
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