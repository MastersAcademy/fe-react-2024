import { useState } from 'react';

import { AboutComponent } from './components/About/About.component.tsx';
import { FooterComponent } from './components/Footer/Footer.component.tsx';
import { HeaderComponent } from './components/Header/Header.component.tsx';
import { ProductsList } from './components/ProductsList/ProductsList.component.tsx';
import { PRODUCTS_DATA } from './data/data.ts';
import { Component } from './interfaces/Component.ts';
import type { Product } from './interfaces/Product.ts';

import './index.css';

export type AddToCartHandler = (item: Product) => void;

const CardKey = 'cart';

function App() {
    const localCart: Product[] = localStorage.getItem(CardKey) ? JSON.parse(localStorage.getItem(CardKey)!) : [];
    const [currentComponent, setCurrentComponent] = useState<Component>(Component.ABOUT);
    const [cartData, setCartData] = useState<Product[]>(localCart);

    function handleChangeContent(content: Component) {
        setCurrentComponent(content);
    }

    function handleAddToCart(item: Product) {
        setCartData((previousCart) => {
            const updatedCart = [...previousCart, item];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    }

    return (
        <>
            <HeaderComponent onChangeComponent={handleChangeContent} activeComponent={currentComponent} cartData={cartData} />
            <main>
                {currentComponent === Component.ABOUT && <AboutComponent />}
                {currentComponent === Component.PRODUCTS && (
                    <ProductsList data={PRODUCTS_DATA} handleAddToCart={handleAddToCart} cartData={cartData} />
                )}
            </main>
            <FooterComponent />
        </>
    );
}

export default App;
