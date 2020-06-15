import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { register, login } from '../actions/UserActions';

export const Authenticate = () => {
  const dispatch = useDispatch()

  const handleRegister = useCallback((event) => {
    event.preventDefault()

    dispatch(register({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    }))
  }, [dispatch])

  const handleLogin = useCallback((event) => {
    // forms reset on submit, so we prevent it
    event.preventDefault()

    dispatch(login({
      email: event.target.email.value,
      password: event.target.password.value
    }))
  }, [dispatch])

  return (
    <>
      <form onSubmit={handleLogin}>
        {renderForm('Login')}
      </form>
      <form onSubmit={handleRegister}>
        <label>
          Name:
          <input type="name" name="name" />
        </label>
        {renderForm('Register')}
      </form>
    </>
  )
}

const renderForm = (submitBtn) => (
  <>
    <label>
      Email:
      <input type="text" name="email" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
    <input type="submit" value={submitBtn} />
  </>
)
