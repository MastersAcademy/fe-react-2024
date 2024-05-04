import React from 'react';

import type { Product } from './product';

import styles from './Product.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className={styles.productCard}>
        <img src={product.images[0]} alt={product.title} width={200} height={200} />
        <div className="product-details">
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
        </div>
    </div>
);

export default ProductCard;
