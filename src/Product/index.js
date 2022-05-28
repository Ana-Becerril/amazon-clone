import React from 'react'
import styles from "./style.module.css";
import {Button} from "@material-ui/core";


 function Product({title, price, image}) {
  return (
    <div className={styles.productWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
        <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
        <div className={styles.imgContainer}>
        <img src={image} alt={title} className={styles.productImage}/>
        </div>
        <Button size="small" style={{
                      background: "#f3a847",
                      padding: "5px",
                      borderRadius: "4px",
                      marginTop:"25px"
                    }}> Add to Cart </Button>
      </div>
  )
}

export default Product