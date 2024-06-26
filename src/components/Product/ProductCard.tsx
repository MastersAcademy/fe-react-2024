import * as React from 'react';

import CartComponent from '@/components/Cart/Cart.component';
import styles from '@/components/Product/Product.module.css';
import type { Product } from '@/Models/product.ts';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <>
        <div className={styles.productCard}>
            <img className={styles.productImage} src={product.images[0]} alt={product.title} width={200} height={200} />
            <div className={styles.productDetails}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.flexPrice}>
                    <p>${product.price.toFixed(2)}</p>
                    <CartComponent productId={product.id.toString()} />
                </div>
            </div>
        </div>
    </>
);

export default ProductCard;
