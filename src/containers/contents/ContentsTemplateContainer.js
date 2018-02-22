import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentsContainer from './ContentsContainer';
import FloatingButtonContainer from './FloatingButtonContainer';
import DialogContainer from './DialogContainer';

class ContentsTemplateContainer extends Component {
  render() {
    console.log('ContentTemplateContainer 랜더링');

    return (
      <div>
        <ContentsContainer />
        <FloatingButtonContainer />
        <DialogContainer />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(ContentsTemplateContainer);