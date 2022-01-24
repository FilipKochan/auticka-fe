import React from 'react';
import './BoxWithCorners.scss';

const BoxWithCorners: React.FC<{ className?: string }> = ({ children, className }) => {
  return <div className="BoxWithCorners">{children}</div>;
};

export default BoxWithCorners;
