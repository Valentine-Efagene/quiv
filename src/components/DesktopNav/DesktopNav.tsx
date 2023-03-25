import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.container}>
      <Logo className={styles.logo} />
      <ul className={styles.navItems}>
        <li>
          <Link className={styles.navItem} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} to="/">
            Explore
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} to="/">
            Create
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} to="/">
            Contact
          </Link>
        </li>
      </ul>
      <Link to="/" className={styles.cta}>
        Connect Wallet
      </Link>
    </nav>
  );
}
