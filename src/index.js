import ReactDom from "react-dom"
import App from "./components/App"

ReactDom.render(<App />, document.getElementById("#app"))
if (module.hot) {
  module.hot.accept()
}
