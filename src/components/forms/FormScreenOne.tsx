import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { Button } from "../buttons"
import { Input } from "../inputs"
import { useFormScreenOne } from "../../hooks/forms"
import { ErrorText, documentChoices } from "."


export const FormScreenOne = () => {

  
  const { errors, handleSubmit, onSubmit, register, openAdvacedSearchAndCloseUserForm } = useFormScreenOne()


  return (
    <form
      className="flex flex-wrap gap-4 items-end"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-1">
        <span>Tipo de documento</span>
        
        <select
          defaultValue='1'
          className="border-2 px-3 py-2 rounded-lg focus:outline-none focus:shadow-primary"
          {
          ...register('documentType')
          }
        >
          {
            documentChoices.map(type => (
              <option
                value={type.value}
                key={type.id}
              >
                {type.label}
              </option>
            ))
          }
        </select>
      </label>

      <label className="flex flex-col gap-1">
        <span>Número del documento</span>
        <Input
          type="number"
          placeholder="934893730384"
          {
          ...register("documentNumber", {
            required: { value: true, message: "Campo obligatorio" },
            minLength: { value: 5, message: "Minimo de caracteres 5" }
          })
          }
        />
        {
          errors.documentNumber?.message && <ErrorText text={errors.documentNumber.message} />
        }
      </label>

      <Button
        text="buscar"
        title="Buscar persona"
        type="submit"
        className="bg-blue-950 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-950"
        spanClassName="text-white font-medium"
        icon={faMagnifyingGlass}
        iconClassName="text-white text-sm"
      />

      <Button
        text="busqueda avanzada"
        title="Abrir opciones de busqueda avanzada"
        className="border-blue-950 hover:bg-blue-300 focus:bg-blue-300"
        spanClassName="text-blue-600 font-medium group-hover:text-white group-focus:text-white"
        icon={faMagnifyingGlass}
        iconClassName="text-sm text-blue-600 group-hover:text-white group-focus:text-white"
        onClick={openAdvacedSearchAndCloseUserForm}
      />
    </form>
  )
}
