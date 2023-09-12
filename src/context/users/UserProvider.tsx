import { FC, PropsWithChildren, useReducer } from "react"
import { UserContext, userReducer } from "."

export interface UserState {
  isOpenAdvancedSearch: boolean,
  isOpenUserForm: boolean
}

const INITIAL_STATE: UserState = {
  isOpenAdvancedSearch: false,
  isOpenUserForm: false
} 

export const UserProvider: FC<PropsWithChildren> = ({children}) => {
  
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  
  const onOpenAdvancedSearch = () => {
    dispatch({type: "setIsOpenAdvancedSearch", payload: true})
  }

  const onCloseAdvancedSearch = () => {
    dispatch({type: "setIsOpenAdvancedSearch", payload: false})
  }
  
  const onOpenUserForm = () => {
    dispatch({type: "setIsOpenUserForm", payload: true})
  }
  const onCloseUserForm = () => {
    dispatch({type: "setIsOpenUserForm", payload: false})
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        onCloseAdvancedSearch,
        onCloseUserForm,
        onOpenAdvancedSearch,
        onOpenUserForm
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
