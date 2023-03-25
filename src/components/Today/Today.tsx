import React, { useEffect, useState } from "react";
import styles from "./Today.module.css";

interface ILogoProps {
  className?: string;
}

export default function Today({ className }: ILogoProps) {
  const [days, setDays] = useState(2);
  const [hours, setHours] = useState(16);
  const [minutes, setMinutes] = useState(40);
  const [seconds, setSeconds] = useState(32);

  useEffect(() => {
    setDays((prevState) => (hours > 24 ? prevState + 1 : prevState));
  }, [hours]);

  useEffect(() => {
    setHours((prevState) => (minutes > 59 ? (prevState + 1) % 24 : prevState));
  }, [minutes]);

  useEffect(() => {
    setMinutes((prevState) =>
      seconds === 0 ? (prevState + 1) % 60 : prevState
    );
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setSeconds(date.getSeconds());

      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, []);

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
            <strong>{days}</strong>
            <small>Days</small>
          </div>
          <div className={styles.card}>
            <strong>{hours}</strong>
            <small>Hours</small>
          </div>
          <div className={styles.card}>
            <strong>{minutes}</strong>
            <small>Minutes</small>
          </div>
          <div className={styles.card}>
            <strong>{seconds}</strong>
            <small>Seconds</small>
          </div>
        </div>
      </div>
    </div>
  );
}
