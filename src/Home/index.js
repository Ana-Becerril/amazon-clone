import styles from "./style.module.css";
import Product from "../Product/index";
import Selection from "../Selection/index";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeBanner}></div>
      <div className={styles.container}>
        <Selection />
        <div className={styles.productsContainer}>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>

        </div>
      </div>
    </div>
  );
}

export default Home;
