import Link from 'next/link'
import React from 'react'
import { product } from '../../interfaces/iproduct'
import styles from './tracker.module.scss'


const Tracker = () => {

    const products:product[] = [
        {
            title: 'Tomates',
            estado: 'En camino',
            img: 'tomate.jpg',
            id: '1234'
            
        },
        {
            title: 'Cilantro',
            estado: 'En camino',
            img:'tomate.jpg',
            id: '1234'
        },
        {
            title: 'Leche',
            estado: 'En camino',
            img:'tomate.jpg',
            id: '1234'
        },
        {
            title: 'Guaro',
            estado: 'En camino',
            img:'tomate.jpg',
            id: '1234'
        }
    ]

  return (
      <div className={styles.tracker}>
          <h1>Mis pedidos</h1>
          <div className={styles.pedidos}>
              {products.map(product => (
                  <Link href='pedido' key={product.id}>
                    <div className={styles.pedido}>
                  <img src={product.img} alt="image description" />
                  <div className={styles.content}>
                              <h2>{product.title}</h2>
                              <p>Estado: {product.estado}</p>
                  </div>
              </div>
              </Link> 
              ))}  

              
          </div>
    </div>
  )
}

export default Tracker