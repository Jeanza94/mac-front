import { UserState } from ".";
import { UserResponse } from "../../components/interfaces";

type UserAction = 
| {type: "setIsOpenAdvancedSearch", payload: boolean}
| {type: "setIsOpenUserForm", payload: boolean}
| {type: "setCurrentUser", payload: UserResponse | undefined}
| {type: "setUsersAdvanced", payload: UserResponse[]}

export const userReducer = (state: UserState, {payload, type}: UserAction): UserState => {
  switch (type) {
    case "setIsOpenAdvancedSearch":
      return {
        ...state,
        isOpenAdvancedSearch: payload 
      }
    case "setIsOpenUserForm":
      return {
        ...state,
        isOpenUserForm: payload
      }
    case "setCurrentUser":
      return {
        ...state,
        currentUser: payload
      }
      case "setUsersAdvanced":
      return {
        ...state,
        usersAdvanced: payload
      }
    default:
      return state
  }
}