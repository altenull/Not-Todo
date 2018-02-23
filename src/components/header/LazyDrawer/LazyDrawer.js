import React from 'react';
import { Drawer, MenuItem } from 'material-ui';
import { ClearIcon } from 'components/common/Icons';

type Props = {
  open: boolean,
  onRequestChange(): void,
  onClearClick(): void
}

const LazyDrawer = ({open, onRequestChange, onClearClick}: Props) => {
  const clearIcon = <ClearIcon />;

  return (
    <Drawer
      docked={false}
      width={200}
      open={open}
      onRequestChange={onRequestChange}
    >
      <MenuItem
        primaryText={'Clear List'}
        leftIcon={clearIcon}
        onClick={onClearClick}
      />
    </Drawer>
  );
}

export default LazyDrawer;