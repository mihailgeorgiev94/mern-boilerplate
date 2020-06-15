import React from 'react';
import { useSelector } from 'react-redux'

import { Items, Authenticate } from './';

export const Home = () =>  {
  const { authenticated } = useSelector(state => state.users )

  return (
    <>
      {authenticated ? <Items/> : <Authenticate/>}
    </>
  )
}
