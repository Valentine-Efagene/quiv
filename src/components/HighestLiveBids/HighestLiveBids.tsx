import React from "react";
import styles from "./HighestLiveBids.module.css";
import HorizontalScrollContainer from "../HorizontalScrollContainer";

interface ILogoProps {
  className?: string;
}

const bids = [
  {
    img: "/lb1.svg",
    name: "Mutant Ape Yacht Club",
    price: 0,
  },
  {
    img: "/lb2.svg",
    name: "Quirkies Originals",
    price: 0,
  },
  {
    img: "/lb3.svg",
    name: "Cool Punk Cats",
    price: 0,
  },
  {
    img: "/lb4.svg",
    name: "Happy Homies",
    price: 0,
  },
  {
    img: "/lb4.svg",
    name: "Happy Homies",
    price: 0,
  },
  {
    img: "/lb4.svg",
    name: "Happy Homies",
    price: 0,
  },
  {
    img: "/lb4.svg",
    name: "Happy Homies",
    price: 0,
  },
];

export default function HighestLiveBids({ className }: ILogoProps) {
  return (
    <div className={`${className} ${styles.container}`}>
      <HorizontalScrollContainer
        shouldTransformScroll={true}
        padderClassName={styles.hScroll}
      >
        {bids.map((bid) => {
          const { img, name, price } = bid;

          return (
            <div className={styles.card}>
              <img src={img} alt="" />
              <span className={styles.name}>{name}</span>
              <span className={styles.price}>
                <img src="/ethereum.svg" alt="" /> {price} ETH
              </span>
              <button>Place Bid</button>
            </div>
          );
        })}
      </HorizontalScrollContainer>
    </div>
  );
}
