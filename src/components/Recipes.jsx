import { useState } from "react"

const myPortfolio = {
  Name: "Shad Khan",
  Qualification: "B.Tech",
  Address: "Bhadohi"
}

const otherDetails = {
  ...myPortfolio,
  Technologies: "ReactJs, NodeJs, ExpresJs, MongoDb",
  Experience: "3.5 years",
  Roles: "ReactJs Developer, FullStack Developer, MernStack Developer"
}
// console.log(myPortfolio)
// console.log(otherDetails)

const Recipes = () => {
  const [recipe, setRecipe] = useState({})
  return (
    <>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(myPortfolio)}>MyPortfolio</button>
      <button onClick={() => setRecipe(otherDetails)}>otherDetails</button>

      <ul>
        {Object.keys(recipe).map(details => (
          <li key={details}>
            {details}: {recipe[details]}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Recipes
