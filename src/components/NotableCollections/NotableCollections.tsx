import React, { useState } from "react";
import { FaAccessibleIcon, FaDigitalOcean, FaEthereum } from "react-icons/fa";
import HorizontalScrollContainer from "../HorizontalScrollContainer";
import styles from "./NotableCollections.module.css";

interface INotableCollectionsProps {
  className?: string;
}

const collections = [
  {
    img: "/nc1.png",
    name: "Mutant Ape Yacht Club",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/nc2.png",
    name: "Quirkies Originals",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/nc3.png",
    name: "Cool Punk Cats",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/nc4.png",
    name: "Happy Homies",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/nc4.png",
    name: "Happy Homies",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/nc4.png",
    name: "Happy Homies",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/nc4.png",
    name: "Happy Homies",
    floor_price: 0,
    volume: 0,
  },
];

export default function NotableCollections({
  className,
}: INotableCollectionsProps) {
  return (
    <div className={`${className} ${styles.container}`}>
      <h2>Notable Collections</h2>
      <HorizontalScrollContainer
        overflowContainerClassName={styles.collections}
      >
        {collections.map(({ name, floor_price, volume, img }) => (
          <div key={name} className={styles.card}>
            <img src={img} alt="" />
            <div className={styles.details}>
              <h4>{name}</h4>
              <div className={styles.price}>
                <span>FLOOR</span>
                <span>
                  <img src="/ethereum.svg" alt="" />
                  {floor_price} ETH
                </span>
              </div>
              <div className={styles.volume}>
                <span>TOTAL VOLUME</span>
                <span>
                  <img src="/ethereum.svg" alt="" />
                  {volume} ETH
                </span>
              </div>
            </div>
          </div>
        ))}
      </HorizontalScrollContainer>
    </div>
  );
}
