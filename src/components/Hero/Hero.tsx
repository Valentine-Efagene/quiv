import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.headline}>
          Marketplace For Creators, Buy & Sell NFTs
        </h1>
        <p className={styles.subheadline}>
          NFT Marketplace brings together artists, creators and crypto
          enthusiasts on a single platform to create and explore top NFTs.
        </p>
        <div className={styles.ctas}>
          <Link to="" className={styles.ctaPrimary}>
            Explore
          </Link>
          <Link to="" className={styles.ctaSecondary}>
            Create NFT <FaArrowRight className={styles.icon} />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>5k+ NFTs Stored</div>
        <div className={styles.info}>100% Authenticity</div>
        <div className={styles.info}>4000+ creators</div>
        <img className={styles.ape1} src="/ape1.svg" alt="" />
        <img className={styles.ape2} src="/ape2.svg" alt="" />
      </div>
    </div>
  );
}
