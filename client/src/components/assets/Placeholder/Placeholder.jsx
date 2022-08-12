import React from 'react';
import './Placeholder.scss';

export const Placeholder = ({ width, height }) => {
  return (
    <div
      style={{ width: `${width}`, height: `${height}` }}
      className='placeholder'
    >
      <div className='placeholder-activity'></div>
    </div>
  );
};
