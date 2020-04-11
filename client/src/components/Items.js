import React from 'react';

import './items.css'

export default class Items extends React.Component {
  state = {
    items: [
      { id: 1, name: 'foo' }
    ]
  }

  handleAddItem = () => {
    const itemName = prompt('Enter name')
    const { items } = this.state

    items.push({ name: itemName, id: 2 })

    this.setState({ items })
  }

  handleRemoveItem = (id) => {
    const { items } = this.state
    const filteredItems = items.filter(item => item.id !== id)

    this.setState({ items: filteredItems })
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <button onClick={this.handleAddItem}>Add Item</button>
        {items.map(item => (
          <div className="item-container">
            <p onClick={() => this.handleRemoveItem(item.id)}>&#10005;</p>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}
