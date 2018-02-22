import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions } from 'store/actionCreators';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from 'lib/muiTheme';
import { AppBar } from 'material-ui';
import LazyDrawer from 'components/base/LazyDrawer';
import Title from 'components/base/Title';
import Counter from 'components/base/Counter';

const ContentStyle = {
  width: '80%',
  margin: 'auto',
  marginTop: '30px'
};

// @TODO
// children: Node
type Props = {
  drawer: boolean,
  open: boolean
}

class AppShell extends Component<Props> {
  handleDrawerToggle = (e) => {
    const { drawer } = this.props;
    if (!drawer) {
      BaseActions.lazeDrawer();
      e.preventDefault();
    } else {
      BaseActions.reverseDrawer();
    }
  }

  render() {
    console.log('AppShell 랜더링');
    const { open, drawer, children } = this.props;
    const { handleDrawerToggle } = this;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title={<Title />}
          iconElementRight={<Counter />}
          onLeftIconButtonClick={handleDrawerToggle}
        />
        {drawer
        &&
          <LazyDrawer
            open={open}
            onRequestChange={open => BaseActions.setDrawer(open)}
            onClick={() => BaseActions.hideDrawer()}
            onMounted={() => BaseActions.showDrawer()}
          />
        }
        <div id="content" style={ContentStyle}>
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  ({ base }: State) => ({
    drawer: base.drawer,
    open: base.open
  }),
  () => ({})
)(AppShell);