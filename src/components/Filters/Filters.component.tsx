import React from 'react';

import CustomSelect from '@/components/Filters/CustomSelect.component';
import CategoryFilterButtons from '@/components/Filters/FilterButton.component.tsx';
import SearchInput from '@/components/Filters/SearchInput.component.tsx';
import type { Category } from '@/constants/filtersCategory.ts';
import type { SortOption } from '@/constants/filtersSortOption.ts';

import styles from './Filters.module.css';

interface FiltersComponentProps {
    selectedCategories: Category[];
    sortOption: SortOption;
    searchQuery: string;
    handleCategorySelect: (category: Category) => void;
    handleSortSelect: (sortOption: SortOption) => void;
    setSearchQuery: (searchQuery: string) => void;
    handleSearch: () => void;
}
export const FiltersComponent: React.FC<FiltersComponentProps> = ({
    selectedCategories,
    sortOption,
    searchQuery,
    setSearchQuery,
    handleCategorySelect,
    handleSortSelect,
    handleSearch,
}) => (
    <>
        <div className={styles.container}>
            <section className={styles.filterFlex}>
                <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
                <div className={styles.rightFlex}>
                    <CategoryFilterButtons selectedCategories={selectedCategories} handleCategorySelect={handleCategorySelect} />
                    <div className={styles.sortFlex}>
                        <p className={styles.sortBy}>Sort by:</p>
                        <CustomSelect value={sortOption} onChange={handleSortSelect} />
                        {/* <select*/}
                        {/*    className={styles.sortSelect}*/}
                        {/*    name="sortOption"*/}
                        {/*    id="sortOption"*/}
                        {/*    value={sortOption}*/}
                        {/*    onChange={(event) => handleSortSelect(event.target.value as SortOption)}*/}
                        {/* >*/}
                        {/*    <option value={SortOption.PRICE_HIGH_TO_LOW}>Price (High - Low)</option>*/}
                        {/*    <option value={SortOption.PRICE_LOW_TO_HIGH}>Price (Low - High)</option>*/}
                        {/*    <option value={SortOption.NEWEST}>Newest</option>*/}
                        {/*    <option value={SortOption.OLDEST}>Oldest</option>*/}
                        {/* </select>*/}
                    </div>
                </div>
            </section>
        </div>
    </>
);

export default FiltersComponent;
