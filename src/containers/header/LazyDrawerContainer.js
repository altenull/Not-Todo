import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { HeaderActions, ContentsActions } from 'store/actionCreators';
import LazyDrawer from 'components/header/LazyDrawer';
import IndexedDB from 'lib/IndexedDB';

type Props = {
  open: boolean
}

class LazyDrawerContainer extends Component<Props> {
  componentDidMount() {
    let frameCount = 0;
    const open = () => (frameCount++ > 0) ? HeaderActions.showDrawer() : requestAnimationFrame(open);
    requestAnimationFrame(open);
  }

  handleClear = () => {
    IndexedDB.removeAll();

    ContentsActions.clearNotTodoList();
    HeaderActions.hideDrawer();
  }

  handleCode = () => {
    window.open('https://github.com/altenull/Not-Todo');
  }

  render() {
    const { open } = this.props;
    const { handleClear, handleCode } = this;

    return (
      <LazyDrawer
        open={open}
        onRequestChange={open => HeaderActions.setDrawer(open)}
        onClearClick={handleClear}
        onCodeClick={handleCode}
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