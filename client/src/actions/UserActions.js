import { SET_USER } from '../actions/types'
import { setToken, client } from '../helpers'

export const login = data => dispatch => {
  client('/auth', { body: data }).then(res => {
    setToken(res.token)
    dispatch(setUser(res.user))
  })
}

export const register = data => dispatch => {
  client('/users', { body: data }).then(res => {
    setToken(res.token)
    dispatch(setUser(res.token))
  })
}

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}
