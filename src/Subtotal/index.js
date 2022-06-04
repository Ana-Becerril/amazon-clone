import React from "react";
import styles from "./style.module.css";
import { useStateValue } from "../StateProvider";
import { Button } from "@material-ui/core";


function Subtotal() {
  const [{ basket }] = useStateValue();
  const subtotal = basket.reduce(
    (accumulator, current) => accumulator + current.price,0);

  return (
    <div className={styles.subtotalWrapper}>
      <p className={styles.subtotalLine}>
        Subtotal ({basket?.length} items):
        <span>${subtotal}</span>
      </p>
      <div className={styles.checkerGift}>
        <input type="checkbox" className={styles.checkbox}/>
        <label className={styles.giftLine}>This orden contains a gift</label>
      </div>
      <Button
        size="small"
        style={{
          background: "#f3a847",
          padding: "5px",
          borderRadius: "4px",
          marginTop: "20px",
        }}
      >
        {" "}
        Proceed to checkout{" "}
      </Button>
    </div>
  );
}

export default Subtotal;
