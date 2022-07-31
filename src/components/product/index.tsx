import { useRouter } from 'next/router'
import React from 'react'
import styles from './product.module.scss'

const Product = () => {
    const router = useRouter()
    const { id } = router.query

  return (
          <div className={styles.product}>
              <img src="tomatoes.jpg" alt="" />
              <h1>Tomatoes</h1>
              <p>{id}</p>          
          </div>
  )
}

export default Product