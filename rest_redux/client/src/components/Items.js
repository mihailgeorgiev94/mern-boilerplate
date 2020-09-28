import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getItems, deleteItem, addItem } from '../actions/ItemActions';

import './items.css'

const arr= [    ];

const hey = "asdsad";
arr.push(hey);;;

export const Items = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items)

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch])

  const handleAddItem = useCallback(() => {
    const itemName = prompt('Enter name')

    dispatch(addItem({ name: itemName }))
  }, [dispatch])

  return (
    <>
      <button onClick={handleAddItem}>Add Item</button>
      {items.map(item => <RenderItem key={item._id} item={item} />)}
    </>
  )
}

const RenderItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="item-container">
      <p onClick={() => dispatch(deleteItem(item._id))}>&#10005;</p>
      <h1>{item.name}</h1>
    </div>
  )
}
