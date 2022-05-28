import React from "react";
import styles from "./style.module.css";
import Product from "../Product/index";
import Selection from "../Selection/index";
import products from "../products.json";

function Home() {
  const listItems = products;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeBanner}></div>
      <div className={styles.container}>
        <Selection />
        <div className={styles.productsContainer}>
          {listItems.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              raiting={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
