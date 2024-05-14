import type { FC } from 'react';

import type { ProductsInterface } from '@/interfaces/interface_product.ts';
import type { ProductListComponentPropsInterface } from '@/interfaces/product_list_component_props.interface.ts';

import addToCardImage from '../../assets/add_to_card.png';

import styles from './product_list.module.css';

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
                            <img className={styles.addProductToCard} src={addToCardImage} alt="add_product_card" />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
