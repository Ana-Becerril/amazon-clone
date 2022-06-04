import React from "react";
import styles from "./style.module.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, image }) {
    // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className={styles.productWrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>${price}</p>
      <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} className={styles.productImage} />
      </div>
      <Button
        onClick={addToBasket}
        size="small"
        style={{
          background: "#f3a847",
          padding: "5px",
          borderRadius: "4px",
          marginTop: "25px",
        }}
      >
        {" "}
        Add to Cart{" "}
      </Button>
    </div>
  );
}

export default Product;
