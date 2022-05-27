import React from "react";
import styles from "./style.module.css";
import { Button } from "@material-ui/core";
import itemOne from "../assets/images/item1.jpg";
import itemTwo from "../assets/images/item2.jpg";
import itemThree from "../assets/images/item3.jpg";

const Selection = () => {
  return (
    <div className={styles.selectionWrapper}>
      <div className={styles.itemSelection}>
        <h2>Shop Father's Day Gifts</h2>
        <div className={styles.imgContainer}>
          <img src={itemOne} alt="Father's Day Gifts" />
        </div>
        <a href="https://www.amazon.com/b?node=23466307011&pf_rd_r=8NB7RHX43HYFN7V0Q3BP&pf_rd_p=4d765aa8-2c60-491b-9d5b-6ee79aa5d420&pd_rd_r=9e7066d6-dc61-4fbc-93af-fbfbdcbe0703&pd_rd_w=zOGgN&pd_rd_wg=FxgJM&ref_=pd_gw_unk" className={styles.selectionLink}>Shop Now</a>
      </div>
      <div className={styles.itemSelection}>
        <h2>Computers and Accesories</h2>
        <div className={styles.imgContainer}>
          <img src={itemTwo} alt="Father's Day Gifts" />
        </div>
        <a href='https://www.amazon.com/b?node=16225007011&pf_rd_r=8NB7RHX43HYFN7V0Q3BP&pf_rd_p=6b30eb15-a900-4294-9772-db8876444356&pd_rd_r=9e7066d6-dc61-4fbc-93af-fbfbdcbe0703&pd_rd_w=V8kwF&pd_rd_wg=FxgJM&ref_=pd_gw_unk' className={styles.selectionLink}>Shop Now</a>
      </div>
      <div className={styles.itemSelection}>
        <h2>Holliday Deals</h2>
        <div className={styles.imgContainer}>
          <img src={itemThree} alt="Father's Day Gifts" />
        </div>
        <a href='https://www.amazon.com/s?i=specialty-aps&bbn=16225006011&rh=n%3A%2116225006011%2Cn%3A3777891&pd_rd_r=9e7066d6-dc61-4fbc-93af-fbfbdcbe0703&pd_rd_w=9Ffkv&pd_rd_wg=FxgJM&pf_rd_p=619b2b85-1519-44b0-b10f-193bd022e08c&pf_rd_r=8NB7RHX43HYFN7V0Q3BP&ref=pd_gw_unk' className={styles.selectionLink}>Shop Now</a>
      </div>
      <div className={styles.loginSelection}>
        <h1>Sign in for the best experience</h1>
        <Button
          style={{
            background: "#f3a847",
            padding: "5px",
            borderRadius: "4px",
          }}
        >
          {" "}
          Sign In Securely{" "}
        </Button>
      </div>
    </div>
  );
};

export default Selection;
