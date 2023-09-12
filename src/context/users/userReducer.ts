import { UserState } from ".";
import { UserResponse } from "../../components/interfaces";

type UserAction = 
| {type: "setIsOpenAdvancedSearch", payload: boolean}
| {type: "setIsOpenUserForm", payload: boolean}
| {type: "serCurrentUser", payload: UserResponse | undefined}

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
    case "serCurrentUser":
      return {
        ...state,
        currentUser: payload
      }
    default:
      return state
  }
}