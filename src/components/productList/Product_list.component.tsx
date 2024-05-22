import React from 'react';

import NameBar from '@/components/productList/NameBar.component.tsx';
import SearchBar from '@/components/productList/SearchBar.component.tsx';
import TriageBar from '@/components/productList/TriageBar.component.tsx';
import type { ProductsInterface } from '@/interfaces/interface_product';

import addToCardImage from '../../assets/add_to_card.svg';
import addToCardDarkThemes from '../../assets/card.svg';

import styles from './product_list.module.css';

interface ProductListComponentProps {
    products: ProductsInterface[];
    selectedProducts: number[];
    toggleProductSelection: (productId: number) => void;
    searchQuery: string;
    filteredName: string;
    sortOption: string;
    setSearchQuery: (query: string) => void;
    setFilteredName: (name: string) => void;
    setSortOption: (option: string) => void;
    isDarkTheme: boolean;
}

export const ProductListComponent: React.FC<ProductListComponentProps> = ({
    products,
    selectedProducts,
    toggleProductSelection,
    searchQuery,
    filteredName,
    sortOption,
    setSearchQuery,
    setFilteredName,
    setSortOption,
    isDarkTheme,
}) => {
    const options = ['Price (Low - High)', 'Price (High - Low)', 'Newest', 'Oldest'];

    const filteredProducts = products
        .filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter((product) => product.title.toLowerCase().includes(filteredName.toLowerCase()))
        .sort((a, b) => {
            switch (sortOption) {
                case 'Price (High - Low)': {
                    return b.price - a.price;
                }
                case 'Price (Low - High)': {
                    return a.price - b.price;
                }
                case 'Newest': {
                    return new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime();
                }
                case 'Oldest': {
                    return new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime();
                }
                default: {
                    return 0;
                }
            }
        });

    return (
        <div className={styles.mainCard}>
            <div className={styles.barContainer}>
                <SearchBar />
                <NameBar />
                <TriageBar options={options} />
            </div>
            <ul className={styles.cardContainer}>
                {filteredProducts.map((product) => (
                    <li className={styles.card} key={product.id}>
                        <img className={styles.productImages} src={product.images[0]} alt="product" />
                        <p className={styles.productTitle}>{product.title}</p>
                        <div className={styles.priceContainer}>
                            <p className={styles.productPrice}>{product.price} ₴</p>
                            <button className={styles.addToCardButton} onClick={() => toggleProductSelection(product.id)}>
                                <img
                                    className={styles.addProductToCard}
                                    src={isDarkTheme ? addToCardDarkThemes : addToCardImage}
                                    alt={isDarkTheme ? 'add_product_card_dark' : 'add_product_card'}
                                />
                                {selectedProducts.includes(product.id) && <span className={styles.cartIndicator}>1</span>}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
