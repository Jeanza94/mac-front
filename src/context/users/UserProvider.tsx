import { FC, PropsWithChildren, useReducer } from "react"
import { UserContext, userReducer } from "."
import { UserResponse } from "../../components/interfaces"

export interface UserState {
  currentUser?: UserResponse,
  isOpenAdvancedSearch: boolean,
  isOpenUserForm: boolean,
  usersAdvanced: UserResponse[]
}

const INITIAL_STATE: UserState = {
  isOpenAdvancedSearch: false,
  isOpenUserForm: false,
  usersAdvanced: []
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

  const setCurrentUser = (user: UserResponse | undefined) => {
    dispatch({type: "setCurrentUser", payload: user})
  }
  
  const setUsersAdvanced = (users: UserResponse[]) => {
    dispatch({type: "setUsersAdvanced", payload: users})
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        onCloseAdvancedSearch,
        onCloseUserForm,
        onOpenAdvancedSearch,
        onOpenUserForm,
        setCurrentUser,
        setUsersAdvanced
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
