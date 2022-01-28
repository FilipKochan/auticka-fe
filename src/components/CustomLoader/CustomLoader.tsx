import { CircularProgress } from '@mui/material';
import React from 'react';
import './CustomLoader.scss';

const CustomLoader: React.FC<{ size?: string; className?: string }> = ({ size, className, children }) => {
  return (
    <div className={className ? `CustomLoader ${className}` : 'CustomLoader'} style={{ fontSize: size }}>
      <CircularProgress size="1.2em" /> {children}
    </div>
  );
};

export default CustomLoader;
