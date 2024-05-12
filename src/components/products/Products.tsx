import { useEffect, useState } from 'react';

import type { Product } from '../../interfaces/Product';

import './products.css';

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('../../data/db.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className="products">
            {products.map((product: Product) => (
                <div key={product.id} className="product-card">
                    <img src={product.images[0]} alt={product.title} />
                    <div className="product-info">
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};
