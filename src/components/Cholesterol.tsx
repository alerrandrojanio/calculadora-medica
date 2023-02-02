import { useEffect, useState } from "react"

export function Cholesterol() {
  const [colesterol, setColesterol] = useState("")
  const [hdl, setHdl] = useState("")
  const [triglicerideos, setTriglicerideos] = useState("")

  const [ldl, setLdl] = useState("")
  const [vldl, setVldl] = useState("")

  const resultadoLdl = (
    parseFloat(colesterol) -
    parseFloat(hdl) -
    parseFloat(triglicerideos) / 5
  ).toFixed(2)
  const resultadoVldl = (parseFloat(triglicerideos) / 5).toFixed(2)

  useEffect(() => {
    setLdl(resultadoLdl.toString())
    setVldl(resultadoVldl.toString())
  }, [colesterol, hdl, triglicerideos])

  return (
    <div className="flex w-full m-auto px-6 justify-center items-center flex-col flex-wrap">
      <div className="flex max-w-[680px] w-full bg-lac-blue-dark shadow-lg rounded-lg justify-center items-center flex-col flex-wrap mt-6">
        <div className="mt-6 flex justify-center items-center gap-8 flex-col">
          <div className="group relative">
            <label className="absolute left-2 top-[-13px] z-10 bg-lac-blue-dark py-0 px-[5px] text-md font-semibold group-focus-within:text-sky-500">
              Colesterol Total (mg/dL)
            </label>
            <input
              type="number"
              className="relative w-64 h-16 rounded-lg border-2 px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              value={colesterol}
              onChange={(e) => setColesterol(e.target.value)}
            />
          </div>

          <div className="group relative">
            <label className="absolute left-2 top-[-13px] z-10 bg-lac-blue-dark py-0 px-[5px] text-md font-semibold group-focus-within:text-sky-500">
              HDL (mg/dL)
            </label>
            <input
              type="number"
              className="relative w-64 h-16 rounded-lg border-2 px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              value={hdl}
              onChange={(e) => setHdl(e.target.value)}
            />
          </div>

          <div className="group relative">
            <label className="absolute left-2 top-[-13px] z-10 bg-lac-blue-dark py-0 px-[5px] text-md font-semibold group-focus-within:text-sky-500">
              Trigicerídeos (mg/dL)
            </label>
            <input
              type="number"
              className="relative w-64 h-16 rounded-lg border-2 px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              value={triglicerideos}
              onChange={(e) => setTriglicerideos(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-14 mb-6 flex justify-center items-center gap-8 flex-row flex-wrap mx-3">
          <div className="group relative">
            <label className="absolute left-2 top-[-13px] z-10 bg-lac-blue-dark py-0 px-[5px] text-md font-semibold group-focus-within:text-sky-500">
              LDL (mg/dL)
            </label>
            <input
              type="number"
              className="relative w-64 h-16 rounded-lg border-2 px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              value={ldl}
              onChange={(e) => setLdl(e.target.value)}
              disabled
            />
          </div>

          <div className="group relative">
            <label className="absolute left-2 top-[-13px] z-10 bg-lac-blue-dark py-0 px-[5px] text-md font-semibold group-focus-within:text-sky-500">
              VLDL (mg/dL)
            </label>
            <input
              type="number"
              className="relative w-64 h-16 rounded-lg border-2 px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              value={vldl}
              onChange={(e) => setVldl(e.target.value)}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  )
}
