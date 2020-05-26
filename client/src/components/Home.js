import React from 'react';
import { connect } from 'react-redux'

import { getToken } from '../helpers';
import { Items, Authenticate } from './';

class Home extends React.Component {
  render() {
    const { authenticated } = this.props

    return (
      <>
        {authenticated ? <Items/> : <Authenticate/>}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.users.authenticated
})

const connectedHome = connect(
  mapStateToProps,
  null
)(Home)

export { connectedHome as Home }
