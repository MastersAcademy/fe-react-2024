import React from 'react';

import mockData from './mocData.json';
import type { Product } from './product';
import ProductCard from './ProductCard';

import styles from './Product.module.css';

const ProductsList: React.FC = () => (
    <div className={styles.productList}>
        <div className={styles.productCard}>
            {mockData.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
);

export default ProductsList;
