import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomSnackbar from '../CustomSnackbar/CustomSnackbar';
import Navbar from '../Navbar';

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <>
      {!isHome && <Navbar type="general" />}
      {children}
      <CustomSnackbar />
    </>
  );
};

export default Layout;
