import type { FC } from 'react';

import { ProductCard } from '@/components/productsList/Product-card.component.tsx';
import type { ProductsInterface } from '@/interface/product-interface.ts';
import type { ProductListComponentPropsInterface } from '@/interface/product-list-component-props.interface.ts';

import styles from './produc-list.module.css';

export const ProductsListComponent: FC<ProductListComponentPropsInterface> = ({ products }) => (
    <div className={styles.mainCard}>
        <ul className={styles.cardContainer}>
            {products.map((product: ProductsInterface) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    </div>
);
