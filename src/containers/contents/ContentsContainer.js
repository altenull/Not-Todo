import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { ContentsActions } from 'store/actionCreators';
import IndexedDB from 'lib/IndexedDB';
import EmptyLogo from 'components/contents/EmptyLogo';
import MasonryLayout from 'components/contents/MasonryLayout';
import NotTodo from 'components/contents/NotTodo';

type Props = {
  notTodoList: ?List
}

class ContentsContainer extends Component<Props> {
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
    console.log('ContentContainer 랜더링');
    const { notTodoList } = this.props;
    let contents = null;

    if (notTodoList === null) {
      return null;
    } else if (notTodoList.size === 0) {
      return <EmptyLogo />;
    } else {
      contents = notTodoList.toJS().map((data, i) => {
        return (
          <NotTodo
            key={i}
            content={data.content}
            createAt={data.date.slice(0, 10)}
          />
        );
      });
    }

    return (
      <MasonryLayout>
        {contents}
      </MasonryLayout>
    );
  }
}

export default connect(
  ({ contents }: State) => ({
    notTodoList: contents.notTodoList
  }),
  () => ({})
)(ContentsContainer);