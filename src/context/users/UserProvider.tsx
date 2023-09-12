import { FC, PropsWithChildren, useReducer } from "react"
import { UserContext, userReducer } from "."

export interface UserState {
  isOpenAdvancedSearch: boolean
}

const INITIAL_STATE: UserState = {
  isOpenAdvancedSearch: false
} 

export const UserProvider: FC<PropsWithChildren> = ({children}) => {
  
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  
  const onOpenAdvancedSearch = () => {
    dispatch({type: "setIsOpenAdvancedSearch", payload: true})
  }

  const onCloseAdvancedSearch = () => {
    dispatch({type: "setIsOpenAdvancedSearch", payload: false})
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        onOpenAdvancedSearch,
        onCloseAdvancedSearch
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
