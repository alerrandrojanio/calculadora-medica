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
    <div className="div-root">
      <div className="mt-2 flex justify-center items-center flex-col gap-2">
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

      <div className="my-4 mx-2 flex justify-center items-center gap-2 flex-wrap">
        <fieldset className="w-64 border border-white flex justify-center rounded-lg">
          <legend className="p-1 ml-3 text-md font-semibold">
            LDL (mg/dL)
          </legend>
          <input
            type="number"
            className="input-test"
            value={ldl}
            onChange={(e) => setLdl(e.target.value)}
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
          />
        </fieldset>
      </div>
    </div>
  )
}
