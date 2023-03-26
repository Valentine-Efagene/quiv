import React, { useState } from "react";
import { FaAccessibleIcon, FaDigitalOcean, FaEthereum } from "react-icons/fa";
import styles from "./Listing.module.css";

interface IListingProps {
  className?: string;
}

const TABLE_BREAK = 5;

const collections = [
  {
    img: "/lb1.svg",
    name: "Mutant Ape Yacht Club",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/lb2.svg",
    name: "Quirkies Originals",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/lb3.svg",
    name: "Cool Punk Cats",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/lb4.svg",
    name: "Happy Homies",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/lb4.svg",
    name: "Happy Homies",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/lb4.svg",
    name: "Happy Homies",
    floor_price: 0,
    volume: 0,
  },
  {
    img: "/lb4.svg",
    name: "Happy Homies",
    floor_price: 0,
    volume: 0,
  },
];

export default function Listing({ className }: IListingProps) {
  const [tab, setTab] = useState<"trending" | "top">("trending");
  const toggleTab = () =>
    setTab((prevState) => (prevState === "trending" ? "top" : "trending"));

  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.toolbar}>
        <div className={styles.tabBar}>
          <button
            className={tab === "trending" ? styles.active : undefined}
            onClick={() => setTab("trending")}
          >
            Trending
          </button>
          <button
            className={tab === "top" ? styles.active : undefined}
            onClick={() => setTab("top")}
          >
            Top
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.periodWrapper}>
            <select className={styles.period} name="period" id="period">
              <option value="24_hours">24 hours</option>
              <option value="2_days">2 days</option>
            </select>
          </div>
          <div className={styles.blockchainPicker}>
            <input
              hidden
              type="radio"
              name="chain"
              id="all_chains"
              value="all_chains"
            />
            <label htmlFor="all_chains">All Chains</label>
            <input
              hidden
              type="radio"
              name="chain"
              id="ethereum"
              value="ethereum"
            />
            <label htmlFor="ethereum">
              <FaEthereum />
            </label>
            <input
              hidden
              type="radio"
              name="chain"
              id="solana"
              value="solana"
            />
            <label htmlFor="solana">
              <FaEthereum />
            </label>
            <input hidden type="radio" name="chain" id="usdt" value="usdt" />
            <label htmlFor="usdt">
              <FaDigitalOcean />
            </label>
            <input hidden type="radio" name="chain" id="doge" value="doge" />
            <label htmlFor="doge">
              <FaAccessibleIcon />
            </label>
          </div>
          <button className={styles.viewAll}>View All</button>
        </div>
      </div>

      <div className={styles.collections}>
        <table>
          <thead>
            <tr>
              <td>Collection</td>
              <td>Floor Price</td>
              <td>Volume</td>
            </tr>
          </thead>
          <tbody>
            {collections.slice(0, TABLE_BREAK).map((collection, index) => {
              const { img, name, floor_price, volume } = collection;

              return (
                <tr key={name} className={styles.card}>
                  <td className={styles.collectionCell}>
                    {index + 1}{" "}
                    <img src={img} alt="" className={styles.displayImage} />{" "}
                    {name}
                  </td>
                  <td className={styles.price}>{floor_price} ETH</td>
                  <td className={styles.volume}>{volume} ETH</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>Collection</td>
              <td>Floor Price</td>
              <td>Volume</td>
            </tr>
          </thead>
          <tbody>
            {collections.slice(TABLE_BREAK, 10).map((collection, index) => {
              const { img, name, floor_price, volume } = collection;

              return (
                <tr className={styles.card} key={name}>
                  <td className={styles.collectionCell}>
                    {index + 5 + 1}{" "}
                    <img src={img} alt="" className={styles.displayImage} />{" "}
                    {name}
                  </td>
                  <td className={styles.price}>{floor_price} ETH</td>
                  <td className={styles.volume}>{volume} ETH</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
