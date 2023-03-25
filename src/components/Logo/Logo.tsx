import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

interface ILogoProps {
  className?: string;
}

export default function Logo({ className }: ILogoProps) {
  return (
    <Link to="/home" className={`${className} ${styles.container}`}>
      <img className={styles.img} src="/logo.svg" alt="Logo" />
    </Link>
  );
}
