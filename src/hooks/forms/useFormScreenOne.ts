import { useForm, SubmitHandler } from "react-hook-form"
import { macApi } from "../../api"
import { UserResponse } from "../../components/interfaces"
import { useContext } from 'react';
import { UserContext } from "../../context/users";

interface FormData {
  documentType: string,
  documentNumber: string
}

export const useFormScreenOne = () => {
  const { onOpenAdvancedSearch, setCurrentUser, onOpenUserForm, onCloseUserForm } = useContext(UserContext)
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async({documentNumber, documentType}) => {
    
    const url = `/api/personas?document_type=${documentType}&document_number=${documentNumber}`

    try {
      const {data} = await macApi.get<UserResponse[]>(url)
      if (data.length === 0) return 
      setCurrentUser(data[0])
      onOpenUserForm() 
    } catch (error) {
      console.log(error)
    }
  } 

  const openAdvacedSearchAndCloseUserForm = () => {
    onOpenAdvancedSearch()
    onCloseUserForm()
  }

  return {
    errors,
    handleSubmit,
    openAdvacedSearchAndCloseUserForm,
    onSubmit,
    register,
  }
}