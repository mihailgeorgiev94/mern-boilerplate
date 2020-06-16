import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'
import { client } from '../helpers'

export const getItems = () => dispatch => {
  client('/items').then(res => dispatch({ type: GET_ITEMS, payload: res }))
}

export const deleteItem = id => dispatch => {
  client(`/items/${id}`, { method: 'DELETE' }).then(res => dispatch({ type: DELETE_ITEM, payload: id}))
}

export const addItem = item => dispatch => {
  client('/items', { body: item }).then(res => dispatch({ type: ADD_ITEM, payload: res }))
}
