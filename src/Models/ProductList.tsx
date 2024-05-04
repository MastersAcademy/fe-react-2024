import React from 'react';

import mockData from './mocData.json';
import type { Product } from './product';
import ProductCard from './ProductCard';

import appStyles from '../App.module.css';
import styles from './Product.module.css';

const ProductsList = () => (
    <section className={appStyles.container}>
        <div className={`${styles.productList}`}>
            {mockData.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </section>
);

export default ProductsList;
