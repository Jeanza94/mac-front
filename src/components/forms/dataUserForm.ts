import {v4 as uuid} from 'uuid'

interface DataUserForm {
  id: string,
  label: string,
  name: UserFormData,
  placeholder:string
}

type UserFormData = "firstName" |"middleName" |"surName" |"lastName" |"birth" |"country" |"gender" |"status"

export const dataUserForm: DataUserForm[] = [
  {
    id: uuid(),
    label: "primer nombre",
    name: "firstName",
    placeholder: "pepito"
  },
  {
    id: uuid(),
    label: "segundo nombre",
    name: "middleName",
    placeholder: "alfredo"
  },
  {
    id: uuid(),
    label: "primer apellido",
    name: "surName",
    placeholder: "hernandez"
  },
  {
    id: uuid(),
    label: "segundo apellido",
    name: "lastName",
    placeholder: "ricotta"
  },
  {
    id: uuid(),
    label: "fecha de nacimiento",
    name: "birth",
    placeholder: "11/09/2023"
  },
  {
    id: uuid(),
    label: "país de nacimiento",
    name: "country",
    placeholder: "colombia"
  },
  {
    id: uuid(),
    label: "genero",
    name: "gender",
    placeholder: "masculino"
  },
  {
    id: uuid(),
    label: "estado civíl",
    name: "status",
    placeholder: "soltero"
  },
]