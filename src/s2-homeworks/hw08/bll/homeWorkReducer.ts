import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      const sortType = action.payload
      const newState = [...state]
      return sortType === "up" ? newState.sort((a, b) => a.name.localeCompare(b.name)) : newState.sort((a, b) => b.name.localeCompare(a.name))// need to fix
    }
    case 'check': {
      return state.filter(people => people.age >= action.payload) // need to fix
    }
    default:
      return state
  }
}
