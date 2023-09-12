import { createContext } from "react";

interface UserContextProps {
  isOpenAdvancedSearch: boolean,
  isOpenUserForm: boolean,
  onCloseAdvancedSearch: () => void,
  onCloseUserForm: () => void,
  onOpenAdvancedSearch: () => void,
  onOpenUserForm: () => void,
}


export const UserContext = createContext({} as UserContextProps)