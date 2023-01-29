import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import CholesterolIndex from "../pages/CholesterolIndex"
import HomaIndex from "../pages/HomaIndex"

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/calculadora-medica/" element={<CholesterolIndex />} />
        <Route path="/calculadora-medica/homa" element={<HomaIndex />} />
      </Routes>
    </Router>
  )
}
