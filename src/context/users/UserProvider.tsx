import { FC, PropsWithChildren, useReducer } from "react"
import { UserContext, userReducer } from "."

export interface UserState {
  isOpenAdvancedSearch: boolean
}

const INITIAL_STATE: UserState = {
  isOpenAdvancedSearch: false
} 

export const UserContextProvider: FC<PropsWithChildren> = ({children}) => {
  
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  
  const onOpenAdvancedSearch = () => {
    dispatch({type: "setIsOpenAdvancedSearch", payload: true})
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        onOpenAdvancedSearch
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
