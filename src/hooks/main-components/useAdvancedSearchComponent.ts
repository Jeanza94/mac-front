import { useContext, ChangeEvent, useState, KeyboardEvent } from 'react';
import { UserContext } from '../../context/users';
import { macApi } from '../../api';
import { UserResponse } from '../../components/interfaces';

export const useAdvancedSearchComponent = () => {

  const {onCloseAdvancedSearch, usersAdvanced, setUsersAdvanced} = useContext(UserContext)
  const [search, setSearch] = useState<string>('')
  const [isFetchingUsers, setIsFetchingUsers] = useState<boolean>(false)



  const onChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value)  
  }

  const onKeyDown = async({key}: KeyboardEvent<HTMLInputElement>) => {
    if (key !== "Enter") return

    const users = await getUsersBySearch()
    if (!users || users.length === 0) return 
    setUsersAdvanced(users)
  }

  const getUsersBySearch = async() => {
    setIsFetchingUsers(true)
    const url = `api/personas?search=${search}`
    try {
      const { data } = await macApi<UserResponse[]>(url)
      return data 
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetchingUsers(false)
    }
  }

  return {
    search,
    isFetchingUsers,
    usersAdvanced,
    onCloseAdvancedSearch,
    onChange,
    onKeyDown
  }
}