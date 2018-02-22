import React, { Component, type Node } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from 'lib/muiTheme';
import HeaderContainer from 'containers/header/HeaderContainer';
import LazyDrawerContainer from 'containers/header/LazyDrawerContainer';

const ContentStyle = {
  width: '80%',
  margin: 'auto',
  marginTop: '30px'
};

type Props = {
  drawer: boolean,
  children: Node
}

class AppShell extends Component<Props> {
  render() {
    console.log('AppShell 랜더링');
    const { drawer, children } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <HeaderContainer />
          {
            drawer && <LazyDrawerContainer />
          }
          <div id="content" style={ContentStyle}>
            {children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  ({ header }: State) => ({
    drawer: header.drawer
  }),
  () => ({})
)(AppShell);