import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppShell from './AppShell';
import EmptyLogo from 'components/base/EmptyLogo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppShell>
          <EmptyLogo />
        </AppShell>
      </BrowserRouter>
    );
  }
}

export default App;