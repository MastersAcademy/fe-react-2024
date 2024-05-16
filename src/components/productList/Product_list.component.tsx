import React, { useEffect, useState } from 'react';

import type { ProductsInterface } from '@/interfaces/interface_product';
import type { ProductListComponentPropsInterface } from '@/interfaces/product_list_component_props.interface';

import addToCardImage from '../../assets/add_to_card.svg';

import styles from './product_list.module.css';

export const ProductListComponent: React.FC<ProductListComponentPropsInterface> = ({
    products,
    selectedProducts,
    toggleProductSelection,
}) => {
    const [localSelectedProducts, setLocalSelectedProducts] = useState<number[]>([]);

    useEffect(() => {
        const storedSelectedProducts = localStorage.getItem('selectedProducts');
        if (storedSelectedProducts) {
            setLocalSelectedProducts(JSON.parse(storedSelectedProducts));
        }
    }, []);

    const handleProductSelection = (productId: number) => {
        const updatedSelectedProducts = localSelectedProducts.includes(productId)
            ? localSelectedProducts.filter((id) => id !== productId)
            : [...localSelectedProducts, productId];

        localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
        setLocalSelectedProducts(updatedSelectedProducts);
        toggleProductSelection(productId);
    };

    useEffect(() => {}, [localSelectedProducts]);

    return (
        <div className={styles.mainCard}>
            <ul className={styles.cardContainer}>
                {products.map((product: ProductsInterface) => (
                    <li className={styles.card} key={product.id}>
                        <img className={styles.productImages} src={product.images[0]} alt="product" />
                        <p className={styles.productTitle}>{product.title}</p>
                        <div className={styles.priceContainer}>
                            <p className={styles.productPrice}>{product.price} ₴</p>
                            <button className={styles.addToCardButton} onClick={() => handleProductSelection(product.id)}>
                                <img className={styles.addProductToCard} src={addToCardImage} alt="add_product_card" />
                                {localSelectedProducts.includes(product.id) && <span className={styles.cartIndicator}>1</span>}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
