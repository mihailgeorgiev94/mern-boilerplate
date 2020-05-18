import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { getItems, deleteItem, addItem } from '../actions/ItemActions';
import { isAuthenticated } from '../helpers';

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

  handleSubmit = (event) => {
    // event.target.value
  }

  renderItem = (item) => (
    <div key={item._id} className="item-container">
      <p onClick={this.handleDeleteItem.bind(this, item._id)}>&#10005;</p>
      <h1>{item.name}</h1>
    </div>
  )

  render() {
    const { items } = this.props;

    return (
      <>
        {isAuthenticated() ? (
          <>
            <button onClick={this.handleAddItem}>Add Item</button>
            {items.map(item => this.renderItem(item))}
          </>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
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
  { getItems, deleteItem, addItem }
)(Items)
