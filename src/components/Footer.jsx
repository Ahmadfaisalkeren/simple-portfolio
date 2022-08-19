import styles from "../style";
import { instagram, linkedin, dribbble } from "../assets";

const Footer = () => (
  <section id="contact" className="pt-30 pb-14">
    <h2 className={`${styles.heading2} text-center`}>
      Contact Me
    </h2>
    <div className={`flex-1 flex space-x-6 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <a href="#"><img src={ dribbble } alt="Dribbble" className="mt-3 mb-10 w-[80px] h-[80px]" /></a>
      <a href="#"><img src={ instagram } alt="Instagram" className="mt-3 mb-10 w-[80px] h-[80px]" /></a>
      <a href="#"><img src={ linkedin } alt="LinkedIn" className="mt-3 mb-10 w-[80px] h-[80px]" /></a>
    </div>
    <div className="w-full px-4 border-t-[1px] border-t-[#fff]">
      <p className={`${styles.paragraph} text-center mt-3`}>
        2022 John Doe. All Right Reserved.
      </p>      
    </div>
  </section>
)

export default Footer