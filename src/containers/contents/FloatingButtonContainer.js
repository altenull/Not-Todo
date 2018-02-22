import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ContentsActions } from 'store/actionCreators';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const fabStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px'
};

class FloatingButtonContainer extends Component {
  handleOpen = () => {
    ContentsActions.showDialog();
  }

  render() {
    const { handleOpen } = this;

    return (
      <FloatingActionButton
        style={fabStyle}
        onTouchTap={handleOpen}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(FloatingButtonContainer);