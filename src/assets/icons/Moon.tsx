import React from 'react';

interface PropertyIcon {
    theme: string;
}
export const MoonIcon: React.FC<PropertyIcon> = ({ theme }) => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.5 3.00008C6.5 7.14222 9.85786 10.5001 14 10.5001C14.7577 10.5001 15.4892 10.388 16.1787 10.179C15.2453 13.2586 12.3844 15.5 9 15.5C4.85786 15.5 1.5 12.1423 1.5 8.00019C1.5 4.61577 3.74173 1.75494 6.82134 0.821533C6.61236 1.51101 6.5 2.24237 6.5 3.00008Z"
            stroke={theme === 'dark' ? '#FFF' : '#656565'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
