import React from 'react';
import styles from './Counter.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  listCount: number
}

const Counter = ({listCount}: Props) => {
  return (
    <div className={cx('container')}>
      <div className={cx('count')}>
        {listCount}
      </div>
    </div>
  );
}

export default Counter;