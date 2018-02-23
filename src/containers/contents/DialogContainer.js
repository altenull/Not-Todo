import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { ContentsActions } from 'store/actionCreators';
import IndexedDB from 'lib/IndexedDB';
import { Dialog, FlatButton, TextField } from 'material-ui';
import moment from 'moment';

type Props = {
  open: boolean
}

class DialogContainer extends Component<Props> {
  // componentWillMount() {
  //   IndexedDB.init();
  // }

  // comopnentWillUnMount() {
  //   IndexedDB.close();
  // }

  handleClose = () => {
    ContentsActions.hideDialog();
  }

  handleSubmit = () => {
    const content = this.contentText.getValue();

    if (!content) {
      ContentsActions.hideDialog();
      return;
    }

    const date = moment().format();
    IndexedDB.createNotTodo(date, content);

    const newNotTodo = [{
      date: date,
      content: content
    }];
    ContentsActions.addNotTodoList(newNotTodo);
    ContentsActions.hideDialog();
  }

  render() {
    const { open } = this.props;
    const { handleClose, handleSubmit } = this;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={handleSubmit}
      />,
    ];

    return (
      <Dialog
        title="Adding New Not Todo"
        actions={actions}
        modal={true}
        open={open}
        onRequestClose={handleClose}
      >
        <TextField
          hintText="Write Somethings"
          name="notTodo"
          fullWidth={true}
          ref={ref => this.contentText = ref}
        />
      </Dialog>
    );
  }
}

export default connect(
  ({ contents }: State) => ({
    open: contents.open
  }),
  () => ({})
)(DialogContainer);