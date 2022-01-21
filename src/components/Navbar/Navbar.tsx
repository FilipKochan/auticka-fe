import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { classHandler } from "../../utils";

export interface NavigationLinksProps {
  type: "home" | "general";
}

export interface Path {
  to: string;
  name: string;
}

const paths: Path[] = [
  { to: "/", name: "Domů" },
  { to: "/vlastni-situace", name: "Vlastní situace" },
  { to: "/testy", name: "Testy" },
  { to: "/muj-ucet", name: "Můj účet" },
];

const Navbar: React.FC<NavigationLinksProps> = ({ type }) => {
  const { pathname } = useLocation();
  const baseClassName = (type === "home" ? "HomeNavbar" : "Navbar") + "__Link";

  return (
    <div className={baseClassName}>
      {paths.map(({ to, name }) => {
        return (
          <Link
            key={to}
            to={to}
            className={classHandler(baseClassName, pathname === to)}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
