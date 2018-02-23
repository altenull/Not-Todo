import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Title = () => {
  return (
    <div className={cx('container')}>
      <span>Not Todo</span>
    </div>
  );
}

export default Title;