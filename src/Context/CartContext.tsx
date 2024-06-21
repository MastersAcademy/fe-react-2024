import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface CartContextProps {
    cartCount: number;
    addToCart: (productId: string) => void;
    getProductCount: (productId: string) => number;
}

const CartContext = createContext<CartContextProps>({
    cartCount: 0,
    addToCart: () => {},
    getProductCount: () => 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartCount, setCartCount] = useState<number>(0);
    const [productCounts, setProductCounts] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const storedCartCount = localStorage.getItem('cartCount');
        if (storedCartCount) {
            setCartCount(Number.parseInt(storedCartCount, 10));
        }

        const storedProductCounts = localStorage.getItem('productCounts');
        if (storedProductCounts) {
            setProductCounts(JSON.parse(storedProductCounts));
        }
    }, []);

    const addToCart = (productId: string) => {
        const newCartCount = cartCount + 1;
        setCartCount(newCartCount);
        localStorage.setItem('cartCount', newCartCount.toString());

        const newProductCount = (productCounts[productId] || 0) + 1;
        const newProductCounts = { ...productCounts, [productId]: newProductCount };
        setProductCounts(newProductCounts);
        localStorage.setItem('productCounts', JSON.stringify(newProductCounts));
    };

    const getProductCount = (productId: string) => productCounts[productId] || 0;

    return <CartContext.Provider value={{ cartCount, addToCart, getProductCount }}>{children}</CartContext.Provider>;
};
