import Link from 'next/link'
import React from 'react'
import styles from './timeline.module.scss'


type props = {
    "status": string,
    "links": {
        "pending": string,
        "pickedUp": string,
        "arrived": string,
 }
};

const index = ({links}: props) => {
  return (
      <div className={styles.timeline}>
                <Link href={links.pending}>
                <div className={`${styles.event} ${styles.active}`}>📦</div>
                </Link>
                <div className={styles.separator}> </div>
                <Link href={links.pickedUp}>
                <div className={styles.event}>🛻</div>
                </Link>
                <div className={styles.separator}> </div>
                <Link href={links.arrived}>
                <div className={styles.event}>🏡</div>
                </Link>
            </div> 
  )
}

export default index