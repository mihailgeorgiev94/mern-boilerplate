import React from 'react';
import { connect } from 'react-redux'
import { getItems, deleteItem, addItem } from '../actions/ItemActions'
import PropTypes from 'prop-types';

import './items.css'

class Items extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  handleAddItem = () => {
    const itemName = prompt('Enter name')
    const { addItem } = this.props

    addItem({ name: itemName, id: 2})
  }

  handleDeleteItem = (id) => {
    const { deleteItem } = this.props

    deleteItem(id)
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        <button onClick={this.handleAddItem}>Add Item</button>
        {items.map(item => (
          <div key={item.id} className="item-container">
            <p onClick={this.handleDeleteItem.bind(this, item.id)}>&#10005;</p>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
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
