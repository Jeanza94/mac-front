import { SubmitHandler, useForm } from "react-hook-form"
import { User, UserResponse } from '../../components/interfaces';
import { macApi } from "../../api";
import { useState, useContext } from 'react';
import { UserContext } from "../../context/users";


export const useUserForm = () => {

  const {currentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: {errors} } = useForm<User>()
  const [isUpdatingUser, setIsUpdatingUser] = useState<boolean>(false)
  const onSubmit:SubmitHandler<User> = (data) => {
    const user = {
      ...currentUser,
      ...data
    }
    updateUser(user as UserResponse)
  }

  const updateUser = async(user: UserResponse) => {

    try {
      setIsUpdatingUser(true)
      await macApi.put(`api/personas/${user.id}/`, {...user})
    } catch (error) {
      console.log(error)
    } finally {
      setIsUpdatingUser(false)

    }
  }

  return {
    errors,
    handleSubmit,
    isUpdatingUser,
    updateUser,
    onSubmit,
    register,
  }
}