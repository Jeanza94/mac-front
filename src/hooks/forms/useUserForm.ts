import { SubmitHandler, useForm } from "react-hook-form"
import { User } from '../../components/interfaces';


export const useUserForm = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<User>()

  const onSubmit:SubmitHandler<User> = (data) => {
    console.log({data})
  }

  return {
    errors,
    handleSubmit,
    onSubmit,
    register,
  }
}