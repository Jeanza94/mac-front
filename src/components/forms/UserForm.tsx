import { dataUserForm } from "."
import { Input } from "../inputs"

export const UserForm = () => {
  return (
    <form className="grid mobile:grid-cols-1 tablet:grid-cols-2 mt-4 gap-2">
      {
        dataUserForm.map(info => (
          <label
            key={info.id}
            className="w-full flex flex-col capitalize gap-1"
          >
            <span>{info.label}</span>
            <Input 
              type={info.name =="birth" ? "date" : "text"}
              placeholder={info.placeholder}
            />
          </label>
        ))
      }
    </form>
  )
}
