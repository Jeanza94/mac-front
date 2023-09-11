import { createContext } from "react";

interface UserContextProps {
  isOpenAdvancedSearch: boolean,
  onOpenAdvancedSearch: () => void
}


export const UserContext = createContext({} as UserContextProps)