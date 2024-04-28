import React from 'react';

interface PropertyIcon {
    theme: string;
}
export const SunIcon: React.FC<PropertyIcon> = ({ theme }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.0001 3.33341V1.66675M10.0001 16.6667V18.3334M5.34526 5.34526L4.16675 4.16675M14.7734 14.7734L15.952 15.952M3.33341 10.0001H1.66675M16.6667 10.0001H18.3334M14.7738 5.34526L15.9524 4.16675M5.34567 14.7734L4.16716 15.952M10.0001 14.1667C7.69889 14.1667 5.83341 12.3013 5.83341 10.0001C5.83341 7.69889 7.69889 5.83341 10.0001 5.83341C12.3013 5.83341 14.1667 7.69889 14.1667 10.0001C14.1667 12.3013 12.3013 14.1667 10.0001 14.1667Z"
            stroke={theme === 'light' ? '#FFF' : '#656565'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
