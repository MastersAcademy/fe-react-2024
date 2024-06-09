import { useState } from 'react';

export enum CategoryEnum {
    ELECTRONICS = 'Electronics',
    SHOES = 'Shoes',
    CLOTHES = 'Clothes',
}

export enum SortEnum {
    PRICE_HIGH_LOW = 'priceSort',
    PRICE_LOW_HIGH = 'priceAsc',
    NEWEST = 'dataNewest',
    OLDEST = 'dataOldest',
}

interface Filters {
    category: CategoryEnum[];
    sort: SortEnum;
    searchQuery: string;
}

export const useFilters = () => {
    const [filters, setFilters] = useState<Filters>({
        category: [],
        sort: SortEnum.PRICE_HIGH_LOW,
        searchQuery: '',
    });

    const handleChangeFilter = (filter: keyof Filters, value: any) => {
        setFilters((previousState) => ({
            ...previousState,
            [filter]: value,
        }));
    };

    return {
        filters,
        handleChangeFilter,
    };
};

export type FiltersReturnType = ReturnType<typeof useFilters>;
