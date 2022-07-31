import React, { useState } from "react";
import styles from "./home-farmer.module.scss";

export default function HomeFarmer() {
  const [file, setFile] = useState("product-placeholder.png");

  return (
    <div className={styles.home}>
      <h1>Add Products to sell</h1>
      <div className={styles.iconContainer}>
        <img src="carrot.png" alt="product img" />
        <span className={styles.addProduct}>+</span>
      </div>
      <form className={styles.form}>
        <div className={styles.item}>
          <span>Name</span>
          <input className={styles.input} type="text" name="Nombre prod" />
        </div>
        <div className={styles.item}>
          <span>Price</span>
          <input className={styles.input} type="text" name="Nombre prod" />
        </div>
        <div className={styles.item}>
          <span>Description</span>
          <input className={styles.input} type="text" name="Nombre prod" />
        </div>
        <div className={styles.item}>
          <span>Stock</span>
          <input className={styles.input} type="text" name="Nombre prod" />
        </div>
        <input type="button" value={"Send"} />
      </form>
    </div>
  );
}
