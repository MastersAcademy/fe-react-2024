import basket from '@/assets/cart.svg';

import styles from './basket.module.css';

export const Basket = () => (
    <a href="#" className={styles['basket']}>
        <img src={basket} />
    </a>
);
