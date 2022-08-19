import styles from "../style";
import { uiux, webdev, mobiledev } from "../assets";


const About = () => (
  <section id="about" className="pt-30 pb-14"> 
    <div className="w-full px-4">
      <h2 className={`${styles.heading2} text-center`}>
        About
      </h2>
      <p className={`${styles.paragraph} text-center`}>
        Hi, My Name is John Doe. I’m a Fullstack Developer based in Indonesia. <br />
        Here are my skills
      </p>
    </div>
    <div className={`${styles.oneSatu} mt-10`}>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ uiux } alt="UI/UX" className="w-full" />
        </div>
      </div>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ webdev } alt="Webdev" className="w-full" />
        </div>
      </div>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ mobiledev } alt="Mobiledev" className="w-full" />
        </div>
      </div>
    </div>
  </section>
)

export default About