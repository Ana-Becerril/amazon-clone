import styles from "./style.module.css";
import Product from "../Product/index";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeBanner}></div>
      <div className={styles.productsContainer}>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Home;
