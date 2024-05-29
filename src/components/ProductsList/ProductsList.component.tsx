import type { SetStateAction } from 'react';
import React from 'react';
import { useState } from 'react';

import type Product from '../api/apiInterfaces.ts';
import { Pagination } from '../Pagination/Pagination.component.tsx';
import { ProductCard } from '../ProductCard/ProductCard.tsx';
import { SearchBar } from '../SearchBar/SearchBar.component';

import { response } from './ProductsResponse.js';

import styles from './ProductsList.module.css';

interface CarsCounterSetProps {
    totalCartCounter: number;
    setTotalCartCounter: (counter: number) => void;
}

export enum CategoryType {
    ELECTRONICS = 'Electronics',
    SHOES = 'Shoes',
    CLOTHES = 'Clothes',
}

export const ProductsList: React.FC<CarsCounterSetProps> = ({ totalCartCounter, setTotalCartCounter }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const getCategoryFromLocalStorage = () => {
        const category = localStorage.getItem('category');
        return category === null ? null : (category as CategoryType);
    };
    const [currentCategory, setCategory] = useState<CategoryType | null>(getCategoryFromLocalStorage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    function filterProductsByCategory(products: Product[], categoryName: CategoryType | null): Product[] {
        return categoryName === null ? products : products.filter((product) => product.category.name === categoryName);
    }

    const filteredProducts = filterProductsByCategory(response, currentCategory);

    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

    return (
        <ul className={styles.container}>
            <SearchBar currentCategory={currentCategory} setActiveCategory={setCategory} />
            <li className={styles.products}>
                {currentProducts.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        totalCartCounter={totalCartCounter}
                        setTotalCartCounter={setTotalCartCounter}
                    />
                ))}
            </li>
            <Pagination productsPerPage={productsPerPage} totalProducts={filteredProducts.length} paginate={paginate} />
        </ul>
    );
};
