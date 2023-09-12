import { UserState } from ".";

type UserAction = 
| {type: "setIsOpenAdvancedSearch", payload: boolean}
| {type: "setIsOpenUserForm", payload: boolean}

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
    default:
      return state
  }
}