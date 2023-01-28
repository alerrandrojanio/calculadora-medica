import { useEffect, useState } from "react"

export function Homa() {
  const [glicose, setGlicose] = useState("")
  const [insulina, setInsulina] = useState("")

  const [homa, setHoma] = useState("")

  const resultadoHoma = (
    (parseFloat(glicose) * 0.0555 * parseFloat(insulina)) /
    22.5
  ).toFixed(2)

  useEffect(() => {
    setHoma(resultadoHoma.toString())
  }, [glicose, insulina])

  return (
    <div className="div-root">
      <div className="mt-2 flex justify-center items-center flex-col gap-2">
        <fieldset className="w-64 border border-white flex justify-center rounded-lg">
          <legend className="p-1 ml-3 text-md font-semibold">
            Glicemia em jejum (mg/dL)
          </legend>
          <input
            type="number"
            className="input-test"
            value={glicose}
            onChange={(e) => setGlicose(e.target.value)}
          />
        </fieldset>
        <fieldset className="w-64 border border-white flex justify-center rounded-lg">
          <legend className="p-1 ml-3 text-md font-semibold">
            Insulina em jejum (ui/ml)
          </legend>
          <input
            type="number"
            className="input-test"
            value={insulina}
            onChange={(e) => setInsulina(e.target.value)}
          />
        </fieldset>
      </div>

      <div className="my-4 mx-2 flex justify-center items-center gap-2 flex-wrap">
        <fieldset className="w-64 border border-white flex justify-center rounded-lg">
          <legend className="p-1 ml-3 text-md font-semibold">HOMA-IR</legend>
          <input
            type="number"
            className="input-test"
            value={homa}
            onChange={(e) => setHoma(e.target.value)}
            disabled
          />
        </fieldset>
      </div>
    </div>
  )
}
