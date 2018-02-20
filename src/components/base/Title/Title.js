import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Title = () => {
  return (
    <div className={cx('container')}>
      <span>Not To Do</span>
      <img src={require('static/images/cancel.svg')} height='25' alt='cancel'/>
    </div>
  );
}

export default Title;