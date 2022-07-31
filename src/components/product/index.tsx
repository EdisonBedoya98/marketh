import { useRouter } from 'next/router'
import React from 'react'
import styles from './product.module.scss'
import Timeline from '../timeline/index'

const Product = () => {
    const router = useRouter()
    const { id } = router.query


    const product = {
        "id": '39208204',
        "farm": 'Finca de Luis',
        "status": 'Pending',
        "statusLinks": {
            "pending": '/product/123',
            "pickedUp": '/product/123',
            "arrived": '/product/123'
        },
        "value": 30000,
        "origin": 'San Carlos',
        "destination-city": 'Medellin',
        "home-address": "Calle 39 sur #45-32",
        "trasnportation-company": "AgroEntrega",
        "expected-date": '02-08-2022'
    }

    return (
        <div className={styles.product}>
            <img src="tomatoes.jpg" alt="" />
            <h1>{product.farm}</h1>
            <p>{id}</p>
            <Timeline links={product.statusLinks}></Timeline>
        </div>
    )
}

export default Product