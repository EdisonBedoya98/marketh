import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.scss' 

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href='/home'>
      <div className={styles.link}>🏠</div>
      </Link>  
      <Link href='/shop'>
      <div className={styles.link}>🏪</div>
      </Link>  
      <Link href='/tracker'>
      <div className={styles.link}>🧺</div>
      </Link>  
    </div>
  )
}




export default Navbar