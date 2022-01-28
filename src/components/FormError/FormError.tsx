import React from 'react';
import './FormError.scss';

const FormError: React.FC<{ style?: React.CSSProperties }> = ({ style, children }) => {
  return (
    <div className="FormError" style={style}>
      {children}
    </div>
  );
};

export default FormError;
