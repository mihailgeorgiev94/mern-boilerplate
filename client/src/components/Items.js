import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { getItems, deleteItem, addItem, register, login } from '../actions/ItemActions';
import { getToken } from '../helpers';

import './items.css'

class Items extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  handleAddItem = () => {
    const itemName = prompt('Enter name')
    const { addItem } = this.props

    addItem({ name: itemName })
  }

  handleDeleteItem = (id) => {
    const { deleteItem } = this.props

    deleteItem(id)
  }

  handleRegister = (event) => {
    const { register } = this.props
    event.preventDefault()

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

    login({
      email: event.target.email.value,
      password: event.target.password.value
    })
  }

  renderItem = (item) => (
    <div key={item._id} className="item-container">
      <p onClick={this.handleDeleteItem.bind(this, item._id)}>&#10005;</p>
      <h1>{item.name}</h1>
    </div>
  )

  renderForm = (submitBtn) => (
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

  // add separate component for register
  render() {
    const { items } = this.props;

    return (
      <>
        {getToken() ? (
          <>
            <button onClick={this.handleAddItem}>Add Item</button>
            {items.map(item => this.renderItem(item))}
          </>
        ) : (
          <>
            <form onSubmit={this.handleLogin}>
              {this.renderForm('Login')}
            </form>
            <form onSubmit={this.handleRegister}>
              <label>
                Name:
                <input type="name" name="name" />
              </label>
              {this.renderForm('Register')}
            </form>
          </>
        )}
      </>
    )
  }
}

Items.propTypes = {
  getItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  items: state.items.items
})

export default connect(
  mapStateToProps,
  { getItems, deleteItem, addItem, register, login }
)(Items)
