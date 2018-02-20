import React, { Component } from 'react';
import { Drawer, MenuItem } from 'material-ui';

class LazyDrawer extends Component {
  componentDidMount() {
    const { onMounted } = this.props;

    let frameCount = 0;
    const open = () => (frameCount++ > 0) ? onMounted() : requestAnimationFrame(open);
    requestAnimationFrame(open);
  }

  render() {
    console.log('drawer 랜더');
    const { open, onRequestChange, onClick } = this.props;

    return (
      <Drawer
        docked={false}
        width={200}
        open={open}
        onRequestChange={onRequestChange}
      >
        <MenuItem
          primaryText={'Clear List'}
          onClick={onClick}
        />
      </Drawer>
    );
  }
}

export default LazyDrawer;