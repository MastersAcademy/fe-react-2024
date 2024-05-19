import * as React from 'react';

import cartBlack from '@/assets/CartIcon/cartBlack.svg';
import cartWhite from '@/assets/CartIcon/cartWhite.svg';

import styles from './Cart.module.css';

interface CartButtonProps {
    count: number;
    onClick: () => void;
    theme: 'light' | 'dark';
}

const CartComponent: React.FC<CartButtonProps> = ({ count, onClick, theme }) => {
    const cartButtonClassName = `${styles.cartButton} ${theme === 'light' ? styles.whiteCart : styles.blackCart} `;
    const cartImageSource = theme === 'light' ? cartBlack : cartWhite;

    return (
        <>
            <button className={cartButtonClassName} onClick={onClick}>
                <img src={cartImageSource} alt="cart" />
                {count > 0 && <span className={styles.counterCart}>{count}</span>}
            </button>
        </>
    );
};

export default CartComponent;
