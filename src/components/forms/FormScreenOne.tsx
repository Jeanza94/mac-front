import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { Button } from "../buttons"
import { Input } from "../inputs"
import { useFormScreenOne } from "../../hooks/forms"
import { ErrorText } from "."


export const FormScreenOne = () => {

  const { errors, handleSubmit, onSubmit, register } = useFormScreenOne()

  return (
    <form
      className="flex flex-wrap gap-4 items-end"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-1">
        <span>Tipo de documento</span>
        <Input
          type="text"
          placeholder="cedula de ciudadania"
          {
          ...register('documentType', {
            required: { value: true, message: "Campo obligatorio" },
            minLength: { value: 3, message: "Minimo de caracteres es 3" }
          })
          }
        />
        {
          errors.documentType?.message && <ErrorText text={errors.documentType.message} />
        }
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
          errors.documentNumber?.message && <ErrorText text={errors.documentNumber.message}/>
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
      />
    </form>
  )
}
