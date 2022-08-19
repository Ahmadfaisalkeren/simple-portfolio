import styles from "./style";
import { Navbar, About, Portfolio, Footer, Hero } from "./components";

const App = () => (
  // Parent Element
  <div className="bg-gradient-gonku">
    <div className="w-full overflow-hidden">
    {/* Navbar Content */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* Hero Content */}
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    {/* About Content, Portfolio, Contact Me, Footer */}
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Portfolio />
        <Footer />
      </div>
    </div>
  </div>
  </div>


);

export default App