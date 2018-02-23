import React, { Component } from 'react';
import AppShell from './AppShell';
import { ContentsActions } from 'store/actionCreators';
import ContentsTemplateContainer from 'containers/contents/ContentsTemplateContainer';
import IndexedDB from 'lib/IndexedDB';

class App extends Component {
  componentWillMount() {
    IndexedDB.init().then(() => {
      IndexedDB.getAll().then((findResult) => {
        ContentsActions.setNotTodoList(findResult);
      });
    });
  }

  componentWillUnmount() {
    IndexedDB.close();
  }

  render() {
    return (
      <AppShell>
        <ContentsTemplateContainer />
      </AppShell>
    );
  }
}

export default App;