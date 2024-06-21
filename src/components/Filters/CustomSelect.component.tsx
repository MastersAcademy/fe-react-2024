import React from 'react';

import type { SortOption } from '@/constants/filtersSortOption.ts';

import styles from './selectCustom.module.css';

interface CustomSelectProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
    // handleSortSelect: (sortOption: SortOption) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, onChange, handleSortSelect }) => (
    <div className={styles.customSelectContainer}>
        <select
            className={styles.customSelect}
            value={value}
            onChange={(event) =>
                // handleSortSelect(event.target.value as SortOption)}
                onChange(event.target.value as SortOption)
            }
            aria-label="Sort options"
        >
            <option value="PRICE_HIGH_TO_LOW">Price (High - Low)</option>
            <option value="PRICE_LOW_TO_HIGH">Price (Low - High)</option>
            <option value="NEWEST">Newest</option>
            <option value="OLDEST">Oldest</option>
        </select>
    </div>
);

export default CustomSelect;
