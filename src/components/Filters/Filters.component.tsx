import React, { useState } from 'react';

import searchIcon from '@/assets/icons/SearchIcon.svg';
import { CategoryEnum, SortEnum } from '@/pages/products/useFilters';

import styles from './Filters.module.css';

interface FiltersComponentProps {
    onCategorySelect: (categories: CategoryEnum[]) => void;
    onSortSelect: (sortOption: SortEnum) => void;
    onSearch: (searchQuery: string) => void;
}

export const FiltersComponent: React.FC<FiltersComponentProps> = ({ onCategorySelect, onSortSelect, onSearch }) => {
    const [selectedCategories, setSelectedCategories] = useState<CategoryEnum[]>([]);
    const [sortOption, setSortOption] = useState<SortEnum>(SortEnum.PRICE_HIGH_LOW);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleCategorySelect = (category: CategoryEnum) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updatedCategories);
        onCategorySelect(updatedCategories);
    };

    const handleSortSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSortOption = event.target.value as SortEnum;
        setSortOption(selectedSortOption);
        onSortSelect(selectedSortOption);
    };

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <>
            <div className={styles.container}>
                <section className={styles.filterFlex}>
                    <div className={styles.searchContainer}>
                        <input
                            className={styles.searchBar}
                            type="search"
                            placeholder={'Search...'}
                            value={searchQuery}
                            onChange={handleSearchInput}
                        />
                        <button className={styles.searchButton} onClick={handleSearch}>
                            <img src={searchIcon} alt="search" />
                        </button>
                    </div>
                    <div className={styles.rightFlex}>
                        <div className={styles.filterButtonsFlex}>
                            {Object.values(CategoryEnum).map((category) => (
                                <button
                                    key={category}
                                    className={`${styles.filterButton} ${selectedCategories.includes(category) ? styles.activeFilterButton : ''}`}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className={styles.sortFlex}>
                            <p className={styles.sortBy}>Sort by:</p>
                            <select className={styles.sortSelect} value={sortOption} onChange={handleSortSelect}>
                                <option value={SortEnum.PRICE_HIGH_LOW}>Price (High - Low)</option>
                                <option value={SortEnum.PRICE_LOW_HIGH}>Price (Low - High)</option>
                                <option value={SortEnum.NEWEST}>Newest</option>
                                <option value={SortEnum.OLDEST}>Oldest</option>
                            </select>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FiltersComponent;
