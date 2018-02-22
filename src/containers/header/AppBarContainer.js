import React, { Component, type Node } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { HeaderActions } from 'store/actionCreators';
import { AppBar } from 'material-ui';
import Title from 'components/header/Title';

type Props = {
  drawer: boolean,
  iconElementRight: Node
}

class AppBarContainer extends Component<Props> {
  handleDrawerToggle = (e) => {
    const { drawer } = this.props;
    if (!drawer) {
      HeaderActions.lazeDrawer();
      e.preventDefault();
    } else {
      HeaderActions.reverseDrawer();
    }
  }

  render() {
    const { iconElementRight } = this.props;
    const { handleDrawerToggle } = this;
    const title = <Title />;

    return (
      <AppBar
        title={title}
        iconElementRight={iconElementRight}
        onLeftIconButtonClick={handleDrawerToggle}
      />
    );
  }
}

export default connect(
  ({ header }: State) => ({
    drawer: header.drawer
  }),
  () => ({})
)(AppBarContainer);