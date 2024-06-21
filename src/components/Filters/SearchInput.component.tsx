import React from 'react';

import searchIcon from '@/assets/search icon.svg';

import styles from './Filters.module.css';

interface SearchInputProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, setSearchQuery, handleSearch }) => (
    <div className={styles.searchContainer}>
        <input
            className={styles.searchBar}
            type="search"
            placeholder={'Search...'}
            value={searchQuery}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
            <img className={styles.searchIcon} src={searchIcon} alt="search" />
        </button>
    </div>
);

export default SearchInput;
