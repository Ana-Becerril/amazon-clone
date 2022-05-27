import React from 'react'
import styles from "./style.module.css";
import {Button} from "@material-ui/core";


 function Product() {
  return (
    <div className={styles.productWrapper}>
        <p className={styles.title}>Title</p>
        <p className={styles.price}>$price</p>
        <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
        <Button style={{
                      background: "#f3a847",
                      padding: "5px",
                      borderRadius: "4px",
                    }}> Add to Cart </Button>
      </div>
  )
}

export default Product