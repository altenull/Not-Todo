import React from 'react';
import styles from './EmptyLogo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EmptyLogo = () => {
  return (
    <div className={cx('container')}>
      <img src={require('static/images/write.svg')} alt='write' />
      <span>Do write & Don't behave</span>
    </div>
  );
}

export default EmptyLogo;