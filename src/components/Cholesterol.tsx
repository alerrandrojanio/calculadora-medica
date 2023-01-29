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
    <div className="flex w-full m-auto p-4 justify-center items-center flex-col flex-wrap">
      <div className="flex max-w-[680px] w-full bg-lac-blue-dark shadow-lg rounded-lg justify-center items-center flex-col flex-wrap mt-6">
        <div className="mt-6 flex gap-3 flex-col">
          <fieldset className="w-64 border border-white flex justify-center rounded-lg">
            <legend className="p-1 ml-3 text-md font-semibold">
              Colesterol Total (mg/dL)
            </legend>
            <input
              type="number"
              className="input-test"
              value={colesterol}
              onChange={(e) => setColesterol(e.target.value)}
            />
          </fieldset>
          <fieldset className="w-64 border border-white flex justify-center rounded-lg">
            <legend className="p-1 ml-3 text-md font-semibold">
              HDL (mg/dL)
            </legend>
            <input
              type="number"
              className="input-test"
              value={hdl}
              onChange={(e) => setHdl(e.target.value)}
            />
          </fieldset>
          <fieldset className="w-64 border border-white flex justify-center rounded-lg">
            <legend className="p-1 ml-3 text-md font-semibold">
              Triglicerídeos (mg/dL)
            </legend>
            <input
              type="number"
              className="input-test"
              value={triglicerideos}
              onChange={(e) => setTriglicerideos(e.target.value)}
            />
          </fieldset>
        </div>

        <div className="my-6 flex justify-center items-center gap-5 flex-wrap">
          <fieldset className="w-64 border border-white flex justify-center rounded-lg">
            <legend className="p-1 ml-3 text-md font-semibold">
              LDL (mg/dL)
            </legend>
            <input
              type="number"
              className="input-test"
              value={ldl}
              onChange={(e) => setLdl(e.target.value)}
              disabled
            />
          </fieldset>
          <fieldset className="w-64 border border-white flex justify-center rounded-lg">
            <legend className="p-1 ml-3 text-md font-semibold">
              VLDL (mg/dL)
            </legend>
            <input
              type="number"
              className="input-test"
              value={vldl}
              onChange={(e) => setVldl(e.target.value)}
              disabled
            />
          </fieldset>
        </div>
      </div>
    </div>
  )
}
