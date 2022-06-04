import React from "react";
import styles from "./style.module.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

 function CheckoutPage({ id, title, image, price }) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id
    })
}

  return (
      <div className={styles.productWrapper}>
        <div className={styles.imgContainer}>
          <img src={image} alt={title} className={styles.productImage} />
        </div>
        <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
        <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
        <Button
          onClick={removeFromBasket}
          size="small"
          style={{
            background: "#f3a847",
            padding: "5px",
            borderRadius: "4px",
            marginTop: "25px",
            maxWidth:'150px'
          }}
        >
          {" "}
          Remove from cart{" "}
        </Button>
        </div>
      </div>
  );
}

export default CheckoutPage
