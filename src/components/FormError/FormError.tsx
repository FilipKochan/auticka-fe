import React from 'react';
import './FormError.scss';

const FormError: React.FC = ({ children }) => {
  return <div className="FormError">{children}</div>;
};

export default FormError;
