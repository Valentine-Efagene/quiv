import React, { ReactNode } from "react";
import styles from "./NavLink.module.css";
import { NavLink as Link } from "react-router-dom";

interface INavLinkProp {
  className?: string;
  isActive?: boolean;
  children?: ReactNode | string;
  to: string;
}

export default function NavLink({
  to,
  className,
  isActive,
  children,
}: INavLinkProp) {
  return (
    <Link
      to={to}
      className={`${isActive ? styles.active : null} ${className} ${
        styles.container
      }`}
    >
      {children}
      <hr />
    </Link>
  );
}
