import { TitleCustom } from "../content"
import { FormScreenOne } from "../forms"

export const SimpleSearchComponent = () => {
  return (
    <section className="flex flex-col gap-4">
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
