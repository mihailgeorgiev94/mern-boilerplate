import { SET_USER } from '../actions/types'

const initialState = {
  user: null,
  authenticated: null
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
  case SET_USER:
    return {
      ...state,
      user: action.payload,
      authenticated: true
    }
  default:
    return state;
  }
}
