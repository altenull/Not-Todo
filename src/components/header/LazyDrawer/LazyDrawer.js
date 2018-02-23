import React from 'react';
import styles from './LazyDrawer.scss';
import classNames from 'classnames/bind';
import { Drawer, MenuItem } from 'material-ui';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import CodeIcon from 'material-ui/svg-icons/action/code';

const cx = classNames.bind(styles);

type Props = {
  open: boolean,
  onRequestChange(): void,
  onClearClick(): void,
  onCodeClick(): void
}

const LazyDrawer = ({open, onRequestChange, onClearClick, onCodeClick}: Props) => {
  return (
    <Drawer
      docked={false}
      width={300}
      open={open}
      onRequestChange={onRequestChange}
    >
      <div className={cx('drawer-header')}>
        <img src={require('static/images/write.svg')} height={90} alt='write' />
        <span>Not Todo</span>
      </div>
      <MenuItem
        primaryText={'Clear List'}
        leftIcon={<DeleteIcon />}
        onClick={onClearClick}
      />
      <MenuItem
        primaryText={'See the code'}
        leftIcon={<CodeIcon />}
        onClick={onCodeClick}
      />
    </Drawer>
  );
}

export default LazyDrawer;