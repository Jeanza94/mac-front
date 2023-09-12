import { createContext } from "react";
import { UserResponse } from "../../components/interfaces";

interface UserContextProps {
  isOpenAdvancedSearch: boolean,
  isOpenUserForm: boolean,
  currentUser?: UserResponse,
  onCloseAdvancedSearch: () => void,
  onCloseUserForm: () => void,
  onOpenAdvancedSearch: () => void,
  onOpenUserForm: () => void,
  setCurrentUser: (user: UserResponse | undefined) => void
}


export const UserContext = createContext({} as UserContextProps)