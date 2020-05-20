import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, SET_USER } from '../actions/types'

// TODO: move user to own reducer
const initialState = {
  items: [],
  user: null
}

export default (state = initialState, action) => {
  switch(action.type) {
  case SET_USER:
    return {
      ...state,
      user: action.payload
    }
  case GET_ITEMS:
    return {
      ...state,
      items: action.payload
    }
  case DELETE_ITEM:
    return {
      ...state,
      items: state.items.filter(item => item._id !== action.payload)
    }
  case ADD_ITEM:
    return {
      ...state,
      items: [action.payload, ...state.items]
    }
  default:
    return state;
  }
}
