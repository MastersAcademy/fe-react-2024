import type { FC } from 'react';

import type { ProductsInterface } from '@/interface/product-interface.ts';
import type { ProductListComponentPropsInterface } from '@/interface/product-list-component-props.interface.ts';

import addToCardImage from '../../assets/AddToCard.svg';

import styles from './produc-list.module.css';

export const ProductsListComponent: FC<ProductListComponentPropsInterface> = ({ products }) => (
    <div className={styles.mainCard}>
        <ul className={styles.cardContainer}>
            {products.map((product: ProductsInterface) => (
                <li className={styles.card} key={product.id}>
                    <img className={styles.productImages} src={product.images[0]} alt="product" />
                    <p className={styles.productTitle}>{product.title}</p>
                    <div className={styles.priceContainer}>
                        <p className={styles.productPrice}>{product.price} ₴</p>
                        <button className={styles.addToCardButton}>
                            <img className={styles.addProductToCard} src={addToCardImage} alt="add·product·to·card" />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
