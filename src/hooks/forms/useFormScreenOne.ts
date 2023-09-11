import { useForm, SubmitHandler } from "react-hook-form"

interface FormData {
  documentType: string,
  documentNumber: string
}

export const useFormScreenOne = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log({data})
  } 

  return {
    errors,
    handleSubmit,
    onSubmit,
    register,
  }
}