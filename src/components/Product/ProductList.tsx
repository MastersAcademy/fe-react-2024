import * as React from 'react';
import { useEffect, useState } from 'react';

import appStyles from '@/App.module.css';
import FiltersComponent from '@/components/Filters/Filters.component.tsx';
import Pagination from '@/components/Pagination/Pagination.component.tsx';
import styles from '@/components/Product/Product.module.css';
import ProductCard from '@/components/Product/ProductCard.tsx';
import type { Category } from '@/constants/filtersCategory.ts';
import { SortOption } from '@/constants/filtersSortOption.ts';
import mockData from '@/Models/mocData.json';
import type { Product } from '@/Models/product.ts';

const ProductList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    const [sortOption, setSortOption] = useState<SortOption>(SortOption.PRICE_HIGH_TO_LOW);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchInput, setSearchInput] = useState<string>('');

    useEffect(() => {
        let updatedProducts = mockData;

        const filterProducts = () => {
            if (selectedCategories.length > 0) {
                updatedProducts = updatedProducts.filter((product) => selectedCategories.includes(product.category.name as Category));
            }

            if (searchQuery) {
                updatedProducts = updatedProducts.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
            }
        };
        filterProducts();

        const sortProducts = () => {
            switch (sortOption) {
                case SortOption.PRICE_LOW_TO_HIGH: {
                    updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
                    break;
                }
                case SortOption.PRICE_HIGH_TO_LOW: {
                    updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
                    break;
                }
                case SortOption.NEWEST: {
                    updatedProducts = updatedProducts.sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime());
                    break;
                }
                case SortOption.OLDEST: {
                    updatedProducts = updatedProducts.sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime());
                    break;
                }
                default: {
                    break;
                }
            }
        };

        sortProducts();

        setFilteredProducts(updatedProducts);
        setCurrentPage(1);
    }, [selectedCategories, sortOption, searchQuery]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCategorySelect = (category: Category) => {
        setSelectedCategories((previousCategories) =>
            previousCategories.includes(category)
                ? previousCategories.filter((cat) => cat !== category)
                : [...previousCategories, category],
        );
    };

    const handleSortSelect = (selectedSortOption: SortOption) => {
        setSortOption(selectedSortOption);
    };

    const handleSearchInput = (query: string) => {
        setSearchInput(query);
    };

    const handleSearch = () => {
        setSearchQuery(searchInput);
    };

    return (
        <>
            <section className={appStyles.container}>
                <FiltersComponent
                    selectedCategories={selectedCategories}
                    sortOption={sortOption}
                    searchQuery={searchInput}
                    handleCategorySelect={handleCategorySelect}
                    handleSortSelect={handleSortSelect}
                    setSearchQuery={handleSearchInput}
                    handleSearch={handleSearch}
                />
                <div className={`${styles.productList}`}>
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {filteredProducts.length > 0 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                )}
            </section>
        </>
    );
};

export default ProductList;
