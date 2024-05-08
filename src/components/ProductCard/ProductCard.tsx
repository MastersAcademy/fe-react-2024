import React, { useState } from 'react';

import cartSVG from '../../assets/dark_cart_icon.svg';
import type Product from '../api/apiInterfaces.ts';

import styles from './ProductCard.module.css';

interface ProductCardAttributes {
    product: Product;
}

const ProductCard: React.FC<ProductCardAttributes> = ({ product }) => {
    const [currentCounter, setCounter] = useState(0);
    const addToCart = () => {
        setCounter(currentCounter + 1);
    };
    return (
        <div className={styles.container}>
            <img className={styles.image} src={product.images[0]} alt={product.title} />
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.price_container}>
                <h2 className={styles.price}>{product.price}₴</h2>
                <button onClick={addToCart} className={styles.button}>
                    <div className={styles.cartContainer}>
                        <img className={styles.cart} src={cartSVG} alt="Cart" style={{ fill: 'red' }} />
                        {currentCounter > 0 ? <span className={styles.cartCounter}>{currentCounter}</span> : ''}
                    </div>
                </button>
            </div>
        </div>
    );
};

export { ProductCard };
