import { useState } from "react"
import { Rotas } from "./routes"
import "./global.css"

function App() {
  const [count, setCount] = useState(0)

  return <Rotas />
}

export default App
