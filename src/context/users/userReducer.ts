import { UserState } from ".";

type UserAction = 
| {type: "setIsOpenAdvancedSearch", payload: boolean}

export const userReducer = (state: UserState, {payload, type}: UserAction): UserState => {
  switch (type) {
    case "setIsOpenAdvancedSearch":
      return {
        ...state,
        isOpenAdvancedSearch: payload 
      }
    default:
      return state
  }
}