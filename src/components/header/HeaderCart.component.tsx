import CartIconSVG from '@/assets/icons/header/cart.svg?react';

import styles from './header-cart.module.css';

export const HeaderCartComponent = () => (
    <div className={styles.headerCart}>
        <CartIconSVG />
        <div className={styles.headerCartCounter}>0</div>
    </div>
);
