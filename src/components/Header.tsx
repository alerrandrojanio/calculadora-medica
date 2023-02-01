import Image from "../assets/img/logo.png"
import { Link } from "react-router-dom"

import logo from "../assets/img/logo.png"

export function Header() {
  return (
    <div className="w-full flex flex-col gap-4 px-4">
      <div>
        <img src={logo} className="w-[400px] m-auto p-4" alt="Logo LAC" />
      </div>
      <div className="mt-6 mx-8 flex justify-center items-center">
        <div className=" flex flex-wrap items-center justify-center gap-6 py-2 px-6 rounded-xl bg-lac-blue-dark">
          <Link
            to={"/calculadora-medica/"}
            className="text-lg font-semibold text-white hover:text-lac-blue-light"
          >
            Colesterol LDL/VLDL
          </Link>{" "}
          <span className="text-white">|</span>
          <Link
            to={"/calculadora-medica/homa"}
            className="text-lg font-semibold text-white hover:text-lac-blue-light"
          >
            Índice de Homa
          </Link>
        </div>
      </div>
    </div>
  )
}
