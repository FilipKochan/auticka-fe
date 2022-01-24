import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors';
import { Navigate } from 'react-router-dom';

const MyAccount: React.FC = () => {
  const user = useSelector(getUser);

  return user.name ? <div>'user logged in!'</div> : <Navigate to="/login" />;
};

export default MyAccount;
