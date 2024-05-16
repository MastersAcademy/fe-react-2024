import { ProductCard } from '@/components/ProductCard/ProductCard.component.tsx';
import { mockProducts } from '@/mock-products.js';

import '@/reset.css';
import styles from './ProductsList.module.css';

export const ProductsList = () => {
    const productsArea = mockProducts.map((product) => (
        <>
            <article key={product.id}>
                <ProductCard
                    id={product.id}
                    title={product.title}
                    images={product.images}
                    price={product.price}
                    description={product.description}
                    creationAt={new Date(product.creationAt)}
                    updatedAt={new Date(product.updatedAt)}
                    category={{
                        ...product.category,
                        creationAt: new Date(product.category.creationAt),
                        updatedAt: new Date(product.category.updatedAt),
                    }}
                />
            </article>
        </>
    ));
    return (
        <>
            <main className={styles.main__block}>
                <div className={`${styles.main__row} ${styles.content}`}>{productsArea}</div>
            </main>
        </>
    );
};
