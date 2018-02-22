import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBarContainer from './AppBarContainer';
import CounterContainer from './CounterContainer';

class HeaderContainer extends Component {
  render() {
    const iconElementRight = <CounterContainer />;

    return (
      <AppBarContainer
        iconElementRight={iconElementRight}
      />
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(HeaderContainer);