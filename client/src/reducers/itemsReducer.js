import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
  items: [
    { id: 1, name: 'foo' }
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
  case GET_ITEMS:
    return {
      ...state
    }
  default:
    return state;
  }
}
