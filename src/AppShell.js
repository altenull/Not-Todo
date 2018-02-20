import React, { Component } from 'react';
import { orange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar } from 'material-ui';
import LazyDrawer from 'components/base/LazyDrawer';
import Title from 'components/base/Title';
import Counter from 'components/base/Counter';

const ContentStyle = {
  width: '90%',
  margin: 'auto',
  marginTop: '30px'
};

class AppShell extends Component {
  state = {
    open: false,
    drawer: false
  };

  handleDrawerToggle = (e) => {
    const { open, drawer } = this.state;

    if (!drawer) {
      this.setState({
        drawer: true
      });
      e.preventDefault();
    } else {
      this.setState({
        open: !open
      });
    }
  }

  render() {
    console.log('AppShell 랜더');
    const { children } = this.props;
    const { open, drawer } = this.state;
    const { handleDrawerToggle } = this;

    const muiTheme = getMuiTheme({
      palette: {
      },
      appBar: {
        color: orange500,
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title={<Title />  }
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={<Counter />}
            onLeftIconButtonClick={handleDrawerToggle}
          />
          {drawer
          &&
            <LazyDrawer
              open={open}
              onRequestChange={open => this.setState({ open: open})}
              onClick={() => this.setState({ open: false })}
              onMounted={() => this.setState({ open: true })}
            />
          }
          <div id="content" style={ContentStyle}>
            {children}
          </div>
          Footer
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppShell;