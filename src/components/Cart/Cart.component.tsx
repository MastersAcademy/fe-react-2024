import * as React from 'react';

import cartBlack from '@/assets/CartIcon/cartBlack.svg';
import cartWhite from '@/assets/CartIcon/cartWhite.svg';

import styles from './Cart.module.css';

interface CartButtonProps {
    count: number;
    onClick: () => void;
    theme: 'light' | 'dark';
    whiteCart?: boolean;
}

const CartComponent: React.FC<CartButtonProps> = ({ count, onClick, theme, whiteCart }) => {
    const cartImageSource = (whiteCart ? cartWhite : theme) === 'light' ? cartBlack : cartWhite;

    return (
        <div>
            <button className={styles.cartButton} onClick={onClick}>
                {count > 0 && <span className={styles.counterCart}>{count}</span>}
                <img src={cartImageSource} alt="cart" />
            </button>
        </div>
    );
};

export default CartComponent;
