import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { getItems, deleteItem, addItem } from '../actions/ItemActions';

import './items.css'

class Items extends React.Component {
  componentDidMount() {
    const { getItems } = this.props;
    getItems();
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
        <button onClick={this.handleAddItem}>Add Item</button>
        {items.map(item => this.renderItem(item))}
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

const connectedItems = connect(
  mapStateToProps,
  { getItems, deleteItem, addItem }
)(Items)

export { connectedItems as Items }
