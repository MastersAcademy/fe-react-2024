import React from 'react';

import { SortOption } from '@/constants/filtersSortOption.ts';

import styles from './selectCustom.module.css';

interface CustomSelectProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, onChange }) => (
    <div className={styles.customSelectContainer}>
        <select
            className={styles.customSelect}
            value={value}
            onChange={(event) => onChange(event.target.value as SortOption)}
            aria-label="Sort options"
        >
            <option value={SortOption.PRICE_HIGH_TO_LOW}>Price (High - Low)</option>
            <option value={SortOption.PRICE_LOW_TO_HIGH}>Price (Low - High)</option>
            <option value={SortOption.NEWEST}>Newest</option>
            <option value={SortOption.OLDEST}>Oldest</option>
        </select>
    </div>
);

export default CustomSelect;
