import React from 'react';

interface CategoryProps {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

type ExcludedCategoryProps = Exclude<CategoryProps, 'image' | 'creationAt' | 'updatedAt'>;

interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: ExcludedCategoryProps;
}

type ExcludedProductProps = Exclude<ProductProps, 'creationAt' | 'updatedAt'>;

function formatPrice(price: number): string {
    return price.toLocaleString('uk-UA');
}

export const ProductsComponent: React.FC<ExcludedProductProps> = ({ id, title, price, description, images, category }) => (
    <div>
        <h2>{title}</h2>
        <div>{description}</div>
        <p>
            Category:
            <a href={`/categories/${category.id}`}>{category.name}</a>
        </p>
        <p>Gallery:</p>
        {images.map((image, index) => (
            <img key={index} src={image} alt={title} />
        ))}
        <p>Price: {formatPrice(price)}₴</p>
        <a href={`/cart/add/${id}`}>Add To Cart</a>
    </div>
);
