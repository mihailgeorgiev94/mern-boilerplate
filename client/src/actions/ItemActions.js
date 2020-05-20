import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, SET_USER } from '../actions/types'
import { setToken, client } from '../helpers'

export const getItems = () => dispatch => {
  client('/items').then(res => dispatch({ type: GET_ITEMS, payload: res }))
}

export const deleteItem = id => dispatch => {
  client(`/items/${id}`).then(res => dispatch({ type: DELETE_ITEM, payload: id}))
}

export const addItem = item => dispatch => {
  client('/items', { body: item }).then(res => dispatch({ type: ADD_ITEM, payload: res }))
}

export const login = data => dispatch => {
  client('/auth', { body: data }).then(res => {
    setToken(res.token)
    dispatch(setUser(res.user))
  })
}

export const register = data => dispatch => {
  client('/users', { body: data }).then(res => {
    setToken(res.data.token)
    dispatch(setUser(res.token))
  })
}

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}
