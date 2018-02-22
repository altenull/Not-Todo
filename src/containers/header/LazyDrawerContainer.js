import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { HeaderActions } from 'store/actionCreators';
import LazyDrawer from 'components/header/LazyDrawer';

type Props = {
  open: boolean
}

class LazyDrawerContainer extends Component<Props> {
  render() {
    const { open } = this.props
    return (
      <LazyDrawer
        open={open}
        onRequestChange={open => HeaderActions.setDrawer(open)}
        onClick={() => HeaderActions.hideDrawer()}
        onMounted={() => HeaderActions.showDrawer()}
      />
    );
  }
}

export default connect(
  ({ header }: State) => ({
    open: header.open
  }),
  () => ({})
)(LazyDrawerContainer);