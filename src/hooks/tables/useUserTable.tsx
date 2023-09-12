import { useContext, useState } from 'react';
import { UserContext } from '../../context/users';
import { UserResponse } from '../../components/interfaces';
import { macApi } from '../../api';

export const useUserTable = () => {

  const { onCloseAdvancedSearch, onOpenUserForm, usersAdvanced, setCurrentUser, setUsersAdvanced } = useContext(UserContext)
  const [isDeletingUser, setIsDeletingUser] = useState<boolean>(false)

  const editUser = (user: UserResponse) => {
    setCurrentUser(user)
    onCloseAdvancedSearch()
    onOpenUserForm()
  }

  const deleteUserInDatabase = async(id: number) => {
    setIsDeletingUser(true)
    try {
      await macApi.delete(`api/personas/${id}`)
      const updatedUsers = usersAdvanced.filter(user => user.id !== id)
      setUsersAdvanced(updatedUsers)
    } catch (error) {
      console.log(error)
    } finally {
      setIsDeletingUser(false)
    }
  }

  return {
    editUser,
    deleteUserInDatabase,
    isDeletingUser,
    usersAdvanced
  }
}