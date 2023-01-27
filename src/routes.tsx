import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { CholesterolIndex } from "./pages/CholesterolIndex"
import { HomaIndex } from "./pages/HomaIndex"

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CholesterolIndex />} />
        <Route path="/homa" element={<HomaIndex />} />
      </Routes>
    </Router>
  )
}
