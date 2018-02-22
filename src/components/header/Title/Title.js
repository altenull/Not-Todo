import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// @TODO
// 반응형 작업.
const Title = () => {
  return (
    <div className={cx('container')}>
      <span>Not Todo</span>
      <img src={require('static/images/cancel.svg')} height='25' alt='cancel'/>
    </div>
  );
}

export default Title;