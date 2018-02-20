import React from 'react';
import styles from './Counter.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Counter = () => {
  const cancelSVG = require('static/images/cancel.svg');

  return (
    <div className={cx('container')}>
      <img src={cancelSVG} alt='cancel' height='35' />
      <div className={cx('count')}>
        27
      </div>
    </div>
  );
}

export default Counter;