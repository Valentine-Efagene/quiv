import React from "react";
import { Link } from "react-router-dom";
import styles from "./HighestLiveBids.module.css";

interface ILogoProps {
  className?: string;
}

const bids = [
  {
    img: "",
    name: "",
    price: 0,
  },
];

export default function HighestLiveBids({ className }: ILogoProps) {
  return <div className={`${className} ${styles.container}`}></div>;
}
