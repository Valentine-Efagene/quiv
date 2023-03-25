import React from "react";
import {
  FaArrowRight,
  FaDiscord,
  FaInstagram,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

interface IFooterProps {
  className?: string;
}

export default function Footer({ className }: IFooterProps) {
  return (
    <footer className={`${className} ${styles.container}`}>
      <div className={styles.top}>
        <div className={styles.conversion}>
          <h4>Stay in the loop</h4>
          <form>
            <input
              placeholder="Your e-mail"
              type="email"
              name="email"
              id="email"
            />
            <button type="submit" className={styles.submit}>
              <FaArrowRight className={styles.icon} />
            </button>
          </form>
          <h4>Join the community</h4>
          <div className={styles.socialLinks}>
            <Link to="/" className={styles.link}>
              <FaReddit className={styles.icon} />
            </Link>
            <Link to="/" className={styles.link}>
              <FaTwitter className={styles.icon} />
            </Link>
            <Link className={styles.link} to="/">
              <FaDiscord className={styles.icon} />
            </Link>
            <Link to="/" className={styles.link}>
              <FaInstagram className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.marketplace}>
          <h3>Marketplace</h3>
          <ul>
            <li>
              <Link to="">All NFTs</Link>
            </li>
            <li>
              <Link to="">Art</Link>
            </li>
            <li>
              <Link to="">Collectibles</Link>
            </li>
            <li>
              <Link to="">Domain Names</Link>
            </li>
            <li>
              <Link to="">Photography</Link>
            </li>
            <li>
              <Link to="">Virtual Worlds</Link>
            </li>
          </ul>
        </div>
        <div className={styles.account}>
          <h3>Marketplace</h3>
          <ul>
            <li>
              <Link to="">Profile</Link>
            </li>
            <li>
              <Link to="">Watchlist</Link>
            </li>
            <li>
              <Link to="">Collections</Link>
            </li>
            <li>
              <Link to="">Create</Link>
            </li>
            <li>
              <Link to="">Settings</Link>
            </li>
          </ul>
        </div>
        <div className={styles.resources}>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="">Help Center</Link>
            </li>
            <li>
              <Link to="">Partners</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Newsletter</Link>
            </li>
          </ul>
        </div>
        <div className={styles.stats}>
          <h3>Stats</h3>
          <ul>
            <li>
              <Link to="">Rankings</Link>
            </li>
            <li>
              <Link to="">Activity</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          <Link to="">Quiv, Inc</Link>
          <Link to="" className={styles.copyright}>
            <AiOutlineCopyrightCircle className={styles.icon} />{" "}
            <span>Community guidelines</span>
          </Link>
          <Link to="">Terms</Link>
          <Link to="">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
