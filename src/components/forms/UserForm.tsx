import { faBroom, faFloppyDisk, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons"
import { ErrorText, dataUserForm, genderChoices, statusChoices } from "."
import { useUserForm } from "../../hooks/forms"
import { Button } from "../buttons"
import { Input } from "../inputs"
import { TitleCustom } from "../content"
import { useContext } from 'react';
import { UserContext } from "../../context/users"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const UserForm = () => {

  const { onCloseUserForm, currentUser } = useContext(UserContext)
  const { errors, register, onSubmit, handleSubmit, isUpdatingUser } = useUserForm()

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TitleCustom text="información de registro" />
      <section
        className="grid mobile:grid-cols-1 tablet:grid-cols-2 mt-4 gap-2"
      >
        {
          dataUserForm.map(info => {
            if (info.name === "gender" || info.name === "status") {
              let data = info.name === "gender" ? genderChoices : statusChoices
              return (
                <select
                  key={info.id}
                  defaultValue='1'
                  className="border-2 px-3 py-2 rounded-lg focus:outline-none focus:shadow-primary"
                  {
                  ...register(info.name)
                  }
                >
                  {
                    data.map(type => (
                      <option
                        value={type.value}
                        key={type.id}
                      >
                        {type.label}
                      </option>
                    ))
                  }
                </select>
              )
            }
            return (
              <label
                key={info.id}
                className="w-full flex flex-col capitalize gap-1"
              >
                <span>{info.label}</span>
                <Input
                  type={info.name == "birth" ? "date" : "text"}
                  placeholder={info.placeholder}
                  {
                  ...register(info.name, {
                    required: { value: true, message: "Campo obligatorio" },
                    minLength: { value: 3, message: "Minimo 3 caracteres" }
                  })
                  }
                  defaultValue={currentUser![info.name] as any}
                />
                {
                  errors[info.name]?.message && <ErrorText text={errors[info.name]!.message!} />
                }
              </label>
            )
          })
        }
      </section>
      <div className="flex gap-2 self-end">
        {
          isUpdatingUser
            ? (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            )
            : (
              <>
                <Button
                  text="limpiar"
                  title="Limpiar datos"
                  icon={faBroom}
                  className="border-blue-950 hover:bg-blue-300 focus:bg-blue-300"
                  spanClassName="text-blue-600 font-medium group-hover:text-white group-focus:text-white"
                  iconClassName="text-sm text-blue-600 group-hover:text-white group-focus:text-white"
                />
                <Button
                  text="cancelar"
                  title="Cancelar formulario"
                  icon={faXmark}
                  className="bg-red-900 hover:bg-red-600"
                  spanClassName="text-white font-medium"
                  iconClassName="text-white"
                  onClick={onCloseUserForm}
                />
                <Button
                  text="guardar"
                  title="Limpiar datos"
                  icon={faFloppyDisk}
                  type="submit"
                  className="bg-green-950 hover:bg-green-600"
                  spanClassName="text-white font-medium"
                  iconClassName="text-white"
                />
              </>
            )
        }

      </div>
    </form>
  )
}
