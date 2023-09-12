import { useContext } from 'react';
import { UserContext } from '../../context/users';

export const useUserTable = () => {

  const { onCloseAdvancedSearch, onOpenUserForm } = useContext(UserContext)
  const editUser = () => {
    onCloseAdvancedSearch()
    onOpenUserForm()
  }

  return {
    editUser
  }
}