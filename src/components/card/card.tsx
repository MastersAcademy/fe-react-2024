import React, { useState } from 'react';

import { CartIcon } from '@/assets/icons/Cart.tsx';
import type { Product } from '@/types/interfaces/Product.ts';

import styles from './card.module.css';

export const Card: React.FC<{ product: Product }> = ({ product }) => {
    const [count, setCount] = useState(0);

    const handleCartClick = () => {
        const cartCount = Number(localStorage.getItem('cartCount')) || 0;
        localStorage.setItem('cartCount', (cartCount + 1).toString());
        setCount(count + 1);

        window.dispatchEvent(new CustomEvent('cartUpdated'));
    };

    return (
        <div className={styles.cardWrapper}>
            <img className={styles.cardImage} src={product.images[0]} alt="product-image" />
            <div className={styles.cardTitle}>{product.title}</div>
            <div className={styles.cardPriceBlock}>
                <div className={styles.cardPrice}>{product.price}₴</div>
                <button onClick={handleCartClick} className={styles.cardIcon}>
                    <CartIcon />
                </button>
                {count > 0 && <div className={styles.counter}>{count}</div>}
            </div>
        </div>
    );
};
