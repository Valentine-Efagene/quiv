import React from "react";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import Logo from "../Logo";
import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.container}>
      <Logo className={styles.logo} />
      <ul className={styles.navItems}>
        <li>
          <NavLink className={styles.navItem} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navItem} to="/">
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navItem} to="/">
            Create
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navItem} to="/">
            Contact
          </NavLink>
        </li>
      </ul>
      <Link to="/" className={styles.cta}>
        Connect Wallet
      </Link>
    </nav>
  );
}
