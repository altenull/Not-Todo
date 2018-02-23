import React from 'react';

const IconStyle = {
  display: 'block',
  color: 'rgba(0, 0, 0, 0.87)',
  fill: 'rgb(117, 117, 117)',
  height: '24px',
  width: '24px',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  position: 'absolute',
  top: '0px',
  margin: '12px',
  left: '4px',
  userSelect: 'none'
}

export const ClearIcon = () => {
  return (
    <svg fill="#757575" viewBox="0 0 24 24" style={IconStyle}>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  );
}