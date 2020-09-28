import { SET_USER, SET_AUTHENTICATED } from '../actions/types'

const initialState = {
  user: null,
  authenticated: null
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
  case SET_USER:
    return {
      ...state,
      user: action.payload
    }
  case SET_AUTHENTICATED:
    return {
      ...state,
      authenticated: action.payload
    }
  default:
    return state;
  }
}
