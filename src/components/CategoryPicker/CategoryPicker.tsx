import React, { useState } from "react";
import { FaAccessibleIcon, FaDigitalOcean, FaEthereum } from "react-icons/fa";
import HorizontalScrollContainer from "../HorizontalScrollContainer";
import styles from "./CategoryPicker.module.css";

interface ICategoryPickerProps {
  className?: string;
}

const collections = [
  {
    img: "/nc1.png",
    name: "Mutant Ape Yacht Club",
  },
  {
    img: "/nc2.png",
    name: "Quirkies Originals",
  },
  {
    img: "/nc3.png",
    name: "Cool Punk Cats",
  },
  {
    img: "/nc4.png",
    name: "Happy Homies",
  },
  {
    img: "/nc4.png",
    name: "Happy Homies",
  },
  {
    img: "/nc4.png",
    name: "Happy Homies",
  },
  {
    img: "/nc4.png",
    name: "Happy Homies",
  },
];

export default function CategoryPicker({ className }: ICategoryPickerProps) {
  return (
    <div className={`${className} ${styles.container}`}>
      <h2>Browse by category</h2>
      <HorizontalScrollContainer
        overflowContainerClassName={styles.collections}
      >
        {collections.map(({ name, img }) => (
          <div key={name} className={styles.card}>
            <img src={img} alt="" />
            <div className={styles.details}>
              <h4>{name}</h4>
            </div>
          </div>
        ))}
      </HorizontalScrollContainer>
    </div>
  );
}
