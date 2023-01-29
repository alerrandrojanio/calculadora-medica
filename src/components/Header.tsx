import Image from "../assets/img/logo.png"
import { Link } from "react-router-dom"

import logo from "../assets/img/logo.png"

export function Header() {
  return (
    <div>
      <div>
        <img src={logo} className="w-[400px] m-auto p-4" alt="Logo LAC" />
      </div>
      <div className="mt-8 font-semibold text-center text-xl flex justify-center gap-4 text-lac-blue-dark">
        <Link
          to={"/calculadora-medica/"}
          className="text-xl font-semibold hover:text-lac-blue-medium"
        >
          Colesterol
        </Link>{" "}
        |
        <Link
          to={"/calculadora-medica/homa"}
          className="text-xl font-semibold hover:text-lac-blue-medium"
        >
          Índice de Homa
        </Link>
      </div>
    </div>
  )
}
