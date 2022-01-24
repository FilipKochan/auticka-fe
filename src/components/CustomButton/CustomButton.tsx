import { CircularProgress } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import './CustomButton.scss';
import { classHandler } from '../../utils';

const CustomButton: React.FC<{
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary';
  loading?: boolean;
  style?: React.CSSProperties;
}> = ({ children, disabled, onClick, type, variant, loading = false, style }) => {
  return (
    <button
      type={type}
      className={`CustomButton--${variant} ${classHandler(`CustomButton`, false, false, disabled || loading)}`}
      disabled={disabled || loading}
      onClick={onClick}
      style={style}
    >
      {loading && <CircularProgress />} {children}
    </button>
  );
};

export default CustomButton;
