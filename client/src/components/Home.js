import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../actions/UserActions';

import { Items, Authenticate } from './';

export const Home = () =>  {
  const { authenticated } = useSelector(state => state.users )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <>
      {authenticated ? <Items/> : <Authenticate/>}
    </>
  )
}
