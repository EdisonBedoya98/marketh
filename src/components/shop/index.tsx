import React from 'react'
import styles from './shop.module.scss'

const Shop = () => {
  return (
    <div className={styles.shop}>
      <h1>Hello, User!</h1>
      <div className={styles.searchbar}>Search</div>
      <h2>Categories</h2>
      <div className={styles.categories}>
        <div className={`${styles.categorie} ${styles.fincas}`}>
          <h1>
            Fincas
          </h1>
        </div>
        <div className={`${styles.categorie} ${styles.productos}`}>
          <h1>
            Productos
          </h1>
        </div>
        <div className={`${styles.categorie} ${styles.ofertas}`}>
          <h1>
            Ofertas
          </h1>
        </div>
        <div className={`${styles.categorie} ${styles.rapido}`}>
          <h1>
            Rápido
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Shop