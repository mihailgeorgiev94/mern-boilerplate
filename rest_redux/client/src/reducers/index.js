import { combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { usersReducer } from './usersReducer'

export default combineReducers({
  items: itemsReducer,
  users: usersReducer
})
