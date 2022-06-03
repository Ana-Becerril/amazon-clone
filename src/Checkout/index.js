import React from "react";
import CheckoutPage from "../CheckoutPage/index";
import Subtotal from "../Subtotal/index";
import styles from "./style.module.css";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img
          className={styles.checkoutBanner}
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="ad"
        />
         {basket?.length === 0 ? (
                    <div>
                        <h1>Your shopping cart is empty</h1>
                        <h2>
                            You have no items in your cart. To buy one or add item to basket click the add to basket button
                        </h2>
                    </div>
                ) : (
                    <div>
                        <h1 className={styles.checkoutTitles}>Your shopping basket</h1>
                        <hr/>
                        {basket.map(item => {
                            console.log(item)
                        return (
                            <CheckoutPage
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        )
                        })}
                    </div>
                )}
      </div>
      <div className={styles.right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
