import { useRouter } from 'next/router'
import React from 'react'
import styles from './product.module.scss'
import { Timeline, TimelineEvent } from 'react-event-timeline'

const Product = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div className={styles.product}>
            <img src="tomatoes.jpg" alt="" />
            <h1>Tomatoes</h1>
            <p>{id}</p>
            <div className={styles.timeline}>
                <div className={`${styles.event} ${styles.active}`}>📦</div>
                <div className={styles.separator}> </div>
                <div className={styles.event}>🛻</div>
                <div className={styles.separator}> </div>
                <div className={styles.event}>🏡</div>
            </div>
        </div>
    )
}

export default Product