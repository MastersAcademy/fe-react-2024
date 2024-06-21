import * as React from 'react';

import cartBlack from '@/assets/CartIcon/cartBlack.svg';
import cartWhite from '@/assets/CartIcon/cartWhite.svg';
import { useCart } from '@/Context/CartContext.tsx';
import { useTheme } from '@/Context/ThemeContext.tsx';

import styles from './Cart.module.css';

interface CartButtonProps {
    whiteCart?: boolean;
    productId?: string;
}

const CartComponent: React.FC<CartButtonProps> = ({ whiteCart, productId }) => {
    const { addToCart, getProductCount, cartCount } = useCart();
    const { theme } = useTheme();
    const cartImageSource = (whiteCart ? cartWhite : theme) === 'light' ? cartBlack : cartWhite;
    const count = productId ? getProductCount(productId) : cartCount;

    return (
        <>
            <div>
                <button className={styles.cartButton} onClick={() => productId && addToCart(productId)}>
                    {count > 0 && <span className={styles.counterCart}>{count}</span>}
                    <img src={cartImageSource} alt="cart" />
                </button>
            </div>
        </>
    );
};

export default CartComponent;
