import React from 'react';
import { connect } from 'react-redux'

import { register, login } from '../actions/UserActions';

class Authenticate extends React.Component {
  handleRegister = (event) => {
    const { register } = this.props
    event.preventDefault()

    // you can fetch items on register
    register({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    })
  }

  handleLogin = (event) => {
    const { login } = this.props

    // forms reset on submit, so we prevent it
    event.preventDefault()

    // you can fetch items on login
    login({
      email: event.target.email.value,
      password: event.target.password.value
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleLogin}>
          {renderForm('Login')}
        </form>
        <form onSubmit={this.handleRegister}>
          <label>
            Name:
            <input type="name" name="name" />
          </label>
          {renderForm('Register')}
        </form>
      </>
    )
  }
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

const connectedAuthenticate = connect(
  null,
  { register, login }
)(Authenticate)

export { connectedAuthenticate as Authenticate }
