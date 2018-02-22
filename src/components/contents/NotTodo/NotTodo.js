import React from 'react';
import styles from './NotTodo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  content: string,
  createAt: string
}

const NotTodo = ({content, createAt}: Props) => {
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        {content}
      </div>
      <div className={cx('footer')}>
        {createAt}
      </div>
    </div>
  );
}

export default NotTodo;