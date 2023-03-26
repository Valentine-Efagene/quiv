import DesktopNav from "../../components/DesktopNav";
import Hero from "../../components/Hero";
import React from "react";
import styles from "./Home.module.css";
import Today from "../../components/Today";
import Footer from "../../components/Footer";
import HighestLiveBids from "../../components/HighestLiveBids";
import Listing from "../../components/Listing";

export default function Home() {
  return (
    <div className={styles.container}>
      <DesktopNav />
      <Hero />
      <Today />
      <HighestLiveBids />
      <Listing />
      <Footer />
    </div>
  );
}
