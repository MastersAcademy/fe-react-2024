import type { FC } from 'react';
import { useState } from 'react';

import addToCardImage from '@/assets/AddToCard.svg';
import styles from '@/components/productsList/produc-list.module.css';
import type { ProductsInterface } from '@/interface/product-interface.ts';

export const ProductCard: FC<{ product: ProductsInterface }> = ({ product }) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <li className={styles.card} key={product.id}>
            <img className={styles.productImages} src={product.images[0]} alt="product" />
            <p className={styles.productTitle}>{product.title}</p>
            <div className={styles.priceContainer}>
                <p className={styles.productPrice}>{product.price} ₴</p>
                <div className={styles.addProductToCardContainer}>
                    {count > 0 && <p className={styles.countItems}>{count}</p>}
                    <button className={styles.addToCardButton} onClick={incrementCount}>
                        <img className={styles.addProductToCard} src={addToCardImage} alt="add·product·to·card" />
                    </button>
                </div>
            </div>
        </li>
    );
};
