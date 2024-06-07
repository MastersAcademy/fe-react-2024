import { useEffect, useState } from 'react';
import * as React from 'react';

import CartComponent from '@/components/Cart/Cart.component';

import type { Product } from './product';

import styles from './Product.module.css';

interface ProductCardProps {
    product: Product;
    addToCart: () => void;
    theme: 'light' | 'dark';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, theme }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem(`product_${product.id}_count`);
        if (storedCount) {
            setCount(Number.parseInt(storedCount, 10));
        }
    }, [product.id]);
    const handleAddCart = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem(`product_${product.id}_count`, newCount.toString());
        addToCart();
    };

    return (
        <>
            <div className={styles.productCard}>
                <img className={styles.productImage} src={product.images[0]} alt={product.title} width={200} height={200} />
                <div className={styles.productDetails}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <div className={styles.flexPrice}>
                        <p>${product.price.toFixed(2)}</p>
                        <CartComponent count={count} onClick={handleAddCart} theme={theme} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
