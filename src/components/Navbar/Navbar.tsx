import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { classHandler } from '../../utils';
import { useSelector } from 'react-redux';
import './Navbar.scss';
import { getUser } from '../../selectors';

export interface NavigationLinksProps {
  type: 'home' | 'general';
}

export interface Path {
  to: string;
  name: string;
}

const Navbar: React.FC<NavigationLinksProps> = ({ type }) => {
  const { pathname } = useLocation();
  const baseClassName = type === 'home' ? 'HomeNavbar' : 'Navbar';
  const user = useSelector(getUser);

  const paths: Path[] = [
    { to: '/', name: 'Domů' },
    { to: '/vlastni-situace', name: 'Vlastní situace' },
    { to: '/testy', name: 'Testy' },
    { to: '/muj-ucet', name: `Můj účet${user?.name ? ` (${user.name})` : ''}` },
  ];

  return (
    <nav className={baseClassName}>
      {paths
        .filter(({ to }) => (to !== '/' && type === 'home') || type === 'general')
        .map(({ to, name }) => {
          return (
            <Link key={to} to={to} className={classHandler(baseClassName + '__Link', pathname === to)}>
              {name}
            </Link>
          );
        })}
    </nav>
  );
};

export default Navbar;
