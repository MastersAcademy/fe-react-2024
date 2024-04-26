import React from 'react';

interface CategoryProps {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

type ExcludedCategoryProps = Exclude<CategoryProps, 'creationAt' | 'updatedAt'>;

export const CategoriesComponent: React.FC<ExcludedCategoryProps> = ({ id, name, image }) => (
    <>
        <a href={`/categories/${id}`}>
            <img src={image} alt={name} />
        </a>
        <a href={`/categories/${id}`}>{name}</a>
    </>
);
