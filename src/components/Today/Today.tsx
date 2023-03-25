import React from "react";
import styles from "./Today.module.css";

interface ILogoProps {
  className?: string;
}

export default function Today({ className }: ILogoProps) {
  return (
    <div className={`${className} ${styles.container}`}>
      <h2>Today’s Highest Bid</h2>
      <div className={styles.content}>
        <div className={styles.bid}>
          <div className={styles.card}>
            <img src="/ethereum.svg" alt="" />
            <h3>Current Bid</h3>
            <span>20.50 ETH = 31299.81 USD</span>
          </div>
        </div>
        <div className={styles.time}>
          <div className={styles.card}>
            <strong>2</strong>
            <small>Days</small>
          </div>
          <div className={styles.card}>
            <strong>16</strong>
            <small>Hours</small>
          </div>
          <div className={styles.card}>
            <strong>40</strong>
            <small>Minutes</small>
          </div>
          <div className={styles.card}>
            <strong>32</strong>
            <small>Seconds</small>
          </div>
        </div>
      </div>
    </div>
  );
}
