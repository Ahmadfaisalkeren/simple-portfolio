import styles from "../style";
import { profile } from "../assets";

const Hero = () => {
  return (
    <section id="hero" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px:6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h5 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[50px] leading-[35px]">
            Hello, I'm John Doe <br />
            <span className={`${styles.paragraph}`}>Welcome to my personal portfolio website</span>
          </h5>
        </div>
          <a href="#about" class="font-poppins font-normal bg-white text-primary py-3 px-8 mt-4 
          rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
          Let's Explore
          </a>
      </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={ profile } alt="Profile" className="w-[432px] h-[432px] relative-z-[5]" />
        </div>
    </section>
  )
}

export default Hero