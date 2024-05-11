import { useState } from 'react';

import Cart from '@/assets/icons/cart2.svg';

import type { Product } from './product';

import styles from './Product.module.css';

interface ProductCardProps {
    product: Product;
    addToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.productCard}>
            <img className={styles.productImage} src={product.images[0]} alt={product.title} width={200} height={200} />
            <div className={styles.productDetails}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.flexPrice}>
                    <p>${product.price.toFixed(2)}</p>
                    <button
                        className={styles.cartButton}
                        onClick={() => {
                            setCount(count + 1);
                            addToCart();
                        }}
                    >
                        <img src={Cart} alt="Cart" />
                        {count > 0 && <span className={styles.counter}>{count}</span>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
