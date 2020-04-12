import React from 'react';
import { connect } from 'react-redux'
import { getItems } from '../actions/ItemActions'
import PropTypes from 'prop-types';

import './items.css'

class Items extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  handleAddItem = () => {
    const itemName = prompt('Enter name')
    const { items } = this.state

    items.push({ name: itemName, id: 2 })

    this.setState({ items })
  }

  handleRemoveItem = (id) => {
    const { items } = this.props
    const filteredItems = items.filter(item => item.id !== id)

    this.setState({ items: filteredItems })
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        <button onClick={this.handleAddItem}>Add Item</button>
        {items.map(item => (
          <div key={item.id} className="item-container">
            <p onClick={() => this.handleRemoveItem(item.id)}>&#10005;</p>
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

export default connect(mapStateToProps, { getItems })(Items)
