import DesktopNav from "../../components/DesktopNav";
import Hero from "../../components/Hero";
import React from "react";
import styles from "./Home.module.css";
import Today from "../../components/Today";

export default function Home() {
  return (
    <div className={styles.container}>
      <DesktopNav />
      <Hero />
      <Today />
    </div>
  );
}
