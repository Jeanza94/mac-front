import {v4 as uuid} from 'uuid'

interface DataUserForm {
  id: string,
  label: string,
  name: UserFormData,
  placeholder:string
}

type UserFormData = "firstname" |"middle_name" |"surname" |"lastname" |"birth" |"country" |"gender" |"status"

export interface GenericChoices {
  id: string,
  value: string,
  label: string
}


export const dataUserForm: DataUserForm[] = [
  {
    id: uuid(),
    label: "primer nombre",
    name: "firstname",
    placeholder: "pepito"
  },
  {
    id: uuid(),
    label: "segundo nombre",
    name: "middle_name",
    placeholder: "alfredo"
  },
  {
    id: uuid(),
    label: "primer apellido",
    name: "surname",
    placeholder: "hernandez"
  },
  {
    id: uuid(),
    label: "segundo apellido",
    name: "lastname",
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


export const documentChoices: GenericChoices[] = [
  {
    id: uuid(),
    label: 'Cedula',
    value: '1'
  },
  {
    id: uuid(),
    label: 'Pasaporte',
    value: '2'
  },
  {
    id: uuid(),
    label: 'Visa',
    value: '3'
  },
  {
    id: uuid(),
    label: 'Otro',
    value: '4'
  },
] 

export const genderChoices: GenericChoices[] = [
  {
    id: uuid(),
    label: 'Masculino',
    value: 'M'
  },
  {
    id: uuid(),
    label: 'Femenino',
    value: 'F'
  },
  {
    id: uuid(),
    label: 'Otro',
    value: 'O'
  },
]

export const statusChoices: GenericChoices[] = [
  {
    id: uuid(),
    label: 'Soltero',
    value: '1'
  },
  {
    id: uuid(),
    label: 'Casado',
    value: '2'
  },
  {
    id: uuid(),
    label: 'Unión libre',
    value: '3'
  },
  {
    id: uuid(),
    label: 'Separado',
    value: '4'
  },
  {
    id: uuid(),
    label: 'Divorciado',
    value: '5'
  },
  {
    id: uuid(),
    label: 'Viudo',
    value: '6'
  },
]