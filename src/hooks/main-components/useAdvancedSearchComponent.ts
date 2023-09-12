import { useContext } from 'react';
import { UserContext } from '../../context/users';

export const useAdvancedSearchComponent = () => {

  const {onCloseAdvancedSearch} = useContext(UserContext)

  return {
    onCloseAdvancedSearch
  }
}