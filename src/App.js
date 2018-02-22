import React, { Component } from 'react';
import AppShell from './AppShell';
import ContentsContainer from 'containers/contents/ContentsContainer';

class App extends Component {
  render() {
    console.log('App.js 랜더링');

    return (
      <AppShell>
        <ContentsContainer />
      </AppShell>
    );
  }
}

export default App;