import Basket from '@/assets/icons/basket.svg?react';
import type { Product } from '@/interfaces/products.ts';

import styles from './ProductCard.module.css';

export const ProductCard = (props: Product) => (
    <>
        <div className={styles.product__card}>
            <img src={props.images[0]} alt="card_image" className={styles.card__image} />
            <h3 className={styles.card__title}>{props.title}</h3>
            <div className={styles.card__price}>
                {props.price}
                <span className={styles.symbol}>₴</span>
                <Basket className={styles.basket} />
            </div>
        </div>
    </>
);
