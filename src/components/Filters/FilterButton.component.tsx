import React from 'react';

import { Category } from '@/constants/filtersCategory.ts';

import styles from './Filters.module.css';

interface CategoryFilterButtonsProps {
    selectedCategories: Category[];
    handleCategorySelect: (category: Category) => void;
}

const CategoryFilterButtons: React.FC<CategoryFilterButtonsProps> = ({ selectedCategories, handleCategorySelect }) => (
    <div className={styles.filterButtonsFlex}>
        <button
            className={`${styles.filterButton} ${selectedCategories.includes(Category.ELECTRONICS) ? styles.active : ''}`}
            onClick={() => handleCategorySelect(Category.ELECTRONICS)}
        >
            Electronics
        </button>
        <button
            className={`${styles.filterButton} ${selectedCategories.includes(Category.SHOES) ? styles.active : ''}`}
            onClick={() => handleCategorySelect(Category.SHOES)}
        >
            Shoes
        </button>
        <button
            className={`${styles.filterButton} ${selectedCategories.includes(Category.CLOTHES) ? styles.active : ''}`}
            onClick={() => handleCategorySelect(Category.CLOTHES)}
        >
            Clothes
        </button>
    </div>
);

export default CategoryFilterButtons;
