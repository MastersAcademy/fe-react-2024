import type { FC } from 'react';
import React, { useState } from 'react';

import type { ProductsInterface } from '@/interfaces/interface_product';
import type { ProductListComponentPropsInterface } from '@/interfaces/product_list_component_props.interface';

import addToCardImage from '../../assets/add_to_card.png';

import styles from './product_list.module.css';

export const ProductsListComponent: FC<ProductListComponentPropsInterface> = ({ products, onAddToCartClick }) => {
    const [cart, setCart] = useState<{ [key: number]: boolean }>({});

    const handleAddToCartClick = (productId: number) => {
        setCart((previousCart) => ({
            ...previousCart,
            [productId]: !previousCart[productId],
        }));
    };

    return (
        <div className={styles.mainCard}>
            <ul className={styles.cardContainer}>
                {products.map((product: ProductsInterface) => (
                    <li className={styles.card} key={product.id}>
                        <img className={styles.productImages} src={product.images[0]} alt="product" />
                        <p className={styles.productTitle}>{product.title}</p>
                        <div className={styles.priceContainer}>
                            <p className={styles.productPrice}>{product.price} ₴</p>
                            <button className={styles.addToCardButton} onClick={() => handleAddToCartClick(product.id)}>
                                <img className={styles.addProductToCard} src={addToCardImage} alt="add_product_card" />
                                {cart[product.id] && <span className={styles.cartIndicator}>1</span>}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
