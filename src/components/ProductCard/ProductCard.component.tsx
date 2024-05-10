import React from 'react';

import type { AddToCartHandler } from '@/App';
import cart from '@/assets/products/Cart.svg';
import type { Product } from '@/interfaces/Product';

import headerStyles from '../Header/header.module.css';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    productData: Product;
    onAddToCart: AddToCartHandler;
    cartData: Product[];
}

export function ProductCard({ onAddToCart, productData, cartData }: ProductCardProps) {
    const itemsQty = cartData.filter((item) => item.title === productData.title);

    return (
        <div className={styles.product_card}>
            <div className={styles.wrapper}>
                <img className={styles.img} src={productData.images[0]} alt="Product" />
                <h3 className={styles.title}>{productData.title}</h3>
                <div className={styles.inf}>
                    <div className={styles.price}>
                        {productData.price} <span> ₴</span>
                    </div>
                    <button className={`${headerStyles.wrapper_cart}`} onClick={() => onAddToCart(productData)}>
                        {itemsQty.length > 0 && <span className={headerStyles.product_quantity}>{itemsQty.length}</span>}
                        <img src={cart} alt="Cart" width="24px" height="24px" />
                    </button>
                </div>
            </div>
        </div>
    );
}
