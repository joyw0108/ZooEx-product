import dynamic from "next/dynamic";
import styles from "./index.module.css";

const Header = dynamic(() => import("../earn/components/Header"));
const Search = dynamic(() => import("../earn/components/Search"));
const Stats = dynamic(() => import("../earn/components/Stats"));
const Details = dynamic(() => import("../earn/components/Details"));
const Transactions = dynamic(() => import("../earn/components/Transactions"));
const Info = dynamic(() => import("../earn/components/Info"));

const EarnPage = () => {
  return (
    <div className={styles.container_box}>
      <Header />

      <Search />

      <Stats />

      <Details />

      <Transactions />

      <Info />
    </div>
  );
};

export default EarnPage;
