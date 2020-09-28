import { SET_USER, SET_AUTHENTICATED } from '../actions/types'
import { setToken, client } from '../helpers'

export const login = data => dispatch => {
  client('/auth', { body: data }).then(res => {
    setToken(res.token)
    dispatch(setUser(res.user))
    dispatch(setAuthenticated(true))
  })
}

export const register = data => dispatch => {
  client('/users', { body: data }).then(res => {
    setToken(res.token)
    dispatch(setUser(res.user))
    dispatch(setAuthenticated(true))
  })
}

export const getUser = () => dispatch => {
  client('/auth/user').then(res => {
    dispatch(setUser(res))
    dispatch(setAuthenticated(true))
  }).catch(res => {
    dispatch(setAuthenticated(false))
  })
}

export const setAuthenticated = (isAuthenticated) => {
  return {
    type: SET_AUTHENTICATED,
    payload: isAuthenticated
  }
}

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}
