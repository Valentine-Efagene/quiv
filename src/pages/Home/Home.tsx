import DesktopNav from "../../components/DesktopNav";
import Hero from "../../components/Hero";
import SizeNotSupported from "../../components/SizeNotSupported";
import styles from "./Home.module.css";
import Today from "../../components/Today";
import Footer from "../../components/Footer";
import HighestLiveBids from "../../components/HighestLiveBids";
import Listing from "../../components/Listing";
import NotableCollections from "../../components/NotableCollections";
import CategoryPicker from "../../components/CategoryPicker";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.body}>
          <DesktopNav />
          <Hero />
          <Today />
          <HighestLiveBids />
          <Listing />
          <NotableCollections />
          <CategoryPicker />
        </main>
        <Footer />
      </div>
      <SizeNotSupported className={styles.sizeNotSupported} />
    </>
  );
}
