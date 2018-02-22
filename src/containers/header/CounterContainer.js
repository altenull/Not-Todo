import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { List } from 'immutable';
import Counter from 'components/header/Counter';

type Props = {
  notTodoList: ?List
}

class CounterContainer extends Component<Props> {
  render() {
    const { notTodoList } = this.props;
    let listCount;

    if (notTodoList === null) {
      return null;
    } else if (notTodoList.size === 0) {
      listCount = 0;
    } else {
      listCount = notTodoList.size;
    }

    return (
      <Counter
        listCount={listCount}
      />
    );
  }
}

export default connect(
  ({ contents }: State ) => ({
    notTodoList: contents.notTodoList
  }),
  () => ({})
)(CounterContainer);