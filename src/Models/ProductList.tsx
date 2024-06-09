import * as React from 'react';
import { useEffect, useState } from 'react';

import FiltersComponent from '@/components/Filters/Filters.component';
import Pagination from '@/components/Pagination/Pagination.component';
import type { CategoryEnum } from '@/pages/products/useFilters';
import { SortEnum } from '@/pages/products/useFilters';

import mockData from './mocData.json';
import type { Product } from './product';
import ProductCard from './ProductCard';

import appStyles from '../App.module.css';
import styles from './Product.module.css';

export interface ProductListProps {
    addToCart: () => void;
    theme: 'light' | 'dark';
}

const ProductList: React.FC<ProductListProps> = ({ addToCart, theme }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const totalPages = Math.ceil(mockData.length / productsPerPage);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<CategoryEnum[]>([]);
    const [sortOption, setSortOption] = useState<SortEnum>(SortEnum.PRICE_HIGH_LOW);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const filterAndSortProducts = () => {
            let updatedProducts = [...mockData];

            if (selectedCategories.length > 0) {
                updatedProducts = updatedProducts.filter((product) => selectedCategories.includes(product.category.name as CategoryEnum));
            }

            if (searchQuery) {
                updatedProducts = updatedProducts.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
            }

            switch (sortOption) {
                case SortEnum.PRICE_LOW_HIGH: {
                    updatedProducts.sort((a, b) => a.price - b.price);
                    break;
                }
                case SortEnum.PRICE_HIGH_LOW: {
                    updatedProducts.sort((a, b) => b.price - a.price);
                    break;
                }
                case SortEnum.NEWEST: {
                    updatedProducts.sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime());
                    break;
                }
                case SortEnum.OLDEST: {
                    updatedProducts.sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime());
                    break;
                }
            }

            setFilteredProducts(updatedProducts);
            setCurrentPage(1);
        };

        filterAndSortProducts();
    }, [selectedCategories, sortOption, searchQuery]);

    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    const handleCategorySelect = (categories: CategoryEnum[]) => {
        setSelectedCategories(categories);
    };

    const handleSortSelect = (selectedSortOption: SortEnum) => {
        setSortOption(selectedSortOption);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <>
            <section className={appStyles.container}>
                <FiltersComponent onCategorySelect={handleCategorySelect} onSortSelect={handleSortSelect} onSearch={handleSearch} />
                <div className={`${styles.productList}`}>
                    {currentProducts.map((product: Product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} theme={theme} />
                    ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} changePage={handlePageChange} theme={theme} />
            </section>
        </>
    );
};

export default ProductList;
