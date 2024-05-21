import * as React from 'react';

import cartBlack from '@/assets/CartIcon/cartBlack.svg';
import cartWhite from '@/assets/CartIcon/cartWhite.svg';

import styles from './Cart.module.css';

interface CartButtonProps {
    count: number;
    onClick: () => void;
    whiteCart?: boolean;
}

const CartComponent: React.FC<CartButtonProps> = ({ count, onClick, theme, whiteCart }) => {
    const cartImageSource = (whiteCart ? cartWhite : theme) === 'light' ? cartBlack : cartWhite;

    return (
        <>
            <button className={styles.cartButton} onClick={onClick}>
                <img src={cartImageSource} alt="cart" />
                {count > 0 && <span className={styles.counterCart}>{count}</span>}
            </button>
        </>
    );
};

export default CartComponent;
