import styles from "../style";
import { itsfulan, siti, squidward, jifood, catkeren, topupkene } from "../assets"; 

const Portfolio = () => (
  <section id="portfolio">
    <div className="w-full px-4">
      <h2 className={`${styles.heading2} text-center`}>
        Portfolio
      </h2>
      <p className={`${styles.paragraph} text-center`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
         Vitae, architecto. Id, tempora? Officiis, suscipit corporis?
      </p>
    </div>
    <div className={`${styles.oneSatu} mt-10`}>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ itsfulan } alt="UI/UX" className="w-full" />
        </div>
      </div>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ siti } alt="Webdev" className="w-full" />
        </div>
      </div>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ squidward } alt="Mobiledev" className="w-full" />
        </div>
      </div>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ jifood } alt="UI/UX" className="w-full" />
        </div>
      </div>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ catkeren } alt="Webdev" className="w-full" />
        </div>
      </div>
      <div className={`${styles.gambarSetengah}`}>
        <div className="shadow-md">
            <img src={ topupkene } alt="Mobiledev" className="w-full" />
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio