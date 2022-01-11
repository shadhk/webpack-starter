import "../styles/index.scss"
import Recipes from "./Recipes"
import sword from "../images/swc-sword.png"
import swordSVG from "../images/sword.svg"

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <div>
          <h1>Hello, ReactJs Developer</h1>
        </div>
        <img src={sword} alt="sword" width="250" />
        <img src={swordSVG} alt="sword" width="250" />
      </main>
      <Recipes />
    </>
  )
}

export default App
