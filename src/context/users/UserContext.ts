import { createContext } from "react";

interface UserContextProps {
  isOpenAdvancedSearch: boolean,
  onOpenAdvancedSearch: () => void
  onCloseAdvancedSearch: () => void
}


export const UserContext = createContext({} as UserContextProps)