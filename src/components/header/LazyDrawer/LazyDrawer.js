import React, { Component } from 'react';
import { Drawer, MenuItem } from 'material-ui';

// @TODO
// Clear List 클릭하면 아이템 모두 삭제하기.
type Props = {
  open: boolean,
  onRequestChange(): void,
  onClick(): void,
  onMounted(): void
}

class LazyDrawer extends Component<Props> {
  componentDidMount() {
    const { onMounted } = this.props;

    let frameCount = 0;
    const open = () => (frameCount++ > 0) ? onMounted() : requestAnimationFrame(open);
    requestAnimationFrame(open);
  }

  render() {
    const { open, onRequestChange, onClick } = this.props;

    return (
      <Drawer
        docked={false}
        width={200}
        open={open}
        onRequestChange={onRequestChange}
      >
        <MenuItem
          primaryText={'Clear List'} // @TODO 아이콘 어떻게 할건지. Material Icon SVG 참고.
          leftIcon={<svg fill="#757575" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>}
          onClick={onClick}
        />
      </Drawer>
    );
  }
}

export default LazyDrawer;