import { TitleCustom } from "../content"
import { FormScreenOne } from "../forms"

export const SimpleSearchComponent = () => {
  return (
    <section>
      <h1
          className="text-2xl font-semibold"
        >
          Administrador de personas
        </h1>
  
        <TitleCustom
          text="información"
        />
  
        <FormScreenOne />
    </section>
  )
}
