import Cart from '@/assets/icons/cart2.svg';

import type { Product } from './product';

import styles from './Product.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className={styles.productCard}>
        <img className={styles.productImage} src={product.images[0]} alt={product.title} width={200} height={200} />
        <div className={styles.productDetails}>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <div className={styles.flexPrice}>
                <p>${product.price.toFixed(2)}</p>
                <img src={Cart} alt="Cart" />
            </div>
        </div>
    </div>
);

export default ProductCard;
