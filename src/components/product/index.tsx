import { useRouter } from 'next/router'
import React from 'react'
import styles from './product.module.scss'
import Timeline from '../timeline/index'

const Product = () => {
    const router = useRouter()
    const { id } = router.query


    const product = {
        "id": '39208204',
        "farm": "Luis's Farm",
        "status": 'Pending',
        "statusLinks": {
            "pending": '/product/123',
            "pickedUp": '/product/123',
            "arrived": '/product/123'
        },
        "products": [
            {

                id: 123,
                name: 'Tomatoes',
                value: 3000,
                qty: "2kg",
            },
            {
                id: 12233,
                name: 'Cebolla',
                value: 3000,
                qty: "2kg",
            },
            {
                id: 1243,
                name: 'Zanahoria',
                value: 3000,
                qty: "2kg",
            }
        ],
        "value": 30000,
        "origin": 'San Carlos',
        "destination-city": 'Medellin',
        "home-address": "Calle 39 sur #45-32",
        "trasnportation-company": "AgroEntrega",
        "expected-date": '02-08-2022'
    }

    return (
        <div className={styles.product}>
            <img src="/vegetables.png" alt="" />
            <div className={styles.info}>
                <p>{id}</p>
                <h1>{product.farm}</h1>
                <h5>Total Value: {product.value}</h5>
                <h5>Estimated date to arrive: { product['expected-date']}</h5>  
                <h5>Destination:  { product['destination-city']}</h5>  
                <div className={styles.products}>
                    <h1>
                        Products
                    </h1>
                {product.products.map(item => (
                    <div className={styles.productBasket} key={item.id}>
                        <img src="/vegetablesproduct.jpg" alt="" />
                        <div className={styles.content}>
                        <h3>
                        {item.name}
                        </h3>
                        <small>
                            {item.qty}
                        </small>
                        <div className={styles.separator}></div>
                        <h6>${item.value} COP</h6>
                        </div>
                    </div>
                ))}
                </div>

            </div>
            <Timeline links={product.statusLinks} status={product.status}></Timeline>
        </div>
    )
}

export default Product