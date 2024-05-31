import { useState } from 'react';

export enum CategoryEnum {
    ELECTRONICS = 'ELECTRONICS',
    SHOES = 'SHOES',
    CLOTHES = 'CLOTHES',
}

export enum SortEnum {
    PRICE_HIGH_LOW = 'PRICE_HIGH_LOW',
    PRICE_LOW_HIGH = 'PRICE_LOW_HIGH',
    NEWEST = 'NEWEST',
    OLDEST = 'OLDEST',
}

interface Filters {
    category: CategoryEnum | null;
    sort: SortEnum;
}

export const useFilters = () => {
    const [filters, setFilters] = useState<Filters>({
        category: null,
        sort: SortEnum.PRICE_HIGH_LOW,
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
