import React, { useState } from 'react';

import cartSVG from '../../assets/dark_cart_icon.svg';
import type Product from '../api/apiInterfaces.ts';

import styles from './ProductCard.module.css';

interface ProductCardAttributes {
    product: Product;
    totalCartCounter: number;
    setTotalCartCounter: (counter: number) => void;
}

const ProductCard: React.FC<ProductCardAttributes> = ({ product, totalCartCounter, setTotalCartCounter }) => {
    const [carState, setCartSate] = useState(0);
    const removeFromCart = () => {
        setCartSate(0);
        setTotalCartCounter(totalCartCounter - 1);
    };

    const addToCart = () => {
        setCartSate(1);
        setTotalCartCounter(totalCartCounter + 1);
    };
    return (
        <div className={styles.container}>
            <img className={styles.image} src={product.images[0]} alt={product.title} />
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.price_container}>
                <h2 className={styles.price}>{product.price}₴</h2>
                <button onClick={carState > 0 ? removeFromCart : addToCart} className={styles.button}>
                    <div className={styles.cartContainer}>
                        <img className={styles.cart} src={cartSVG} alt="Cart" style={{ fill: 'red' }} />
                        {carState > 0 ? <span className={styles.cartCounter}>{carState}</span> : ''}
                    </div>
                </button>
            </div>
        </div>
    );
};

export { ProductCard };
