import { useState } from 'react';

import { AboutMeComponents } from '@/components/about/About_me.component.tsx';
import Footer from '@/components/footer/Footer.component.tsx';
import { ProductsListComponent } from '@/components/productList/Product_list.component.tsx';
import { mockData } from '@/mock_data.ts';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    const [currentComponent, setCurrentComponent] = useState('About');
    const [cart, setCart] = useState<{ [key: number]: boolean }>({});
    const toggleComponent = (componentName: string) => setCurrentComponent(componentName);

    const handleAddToCartClick = (productId: number) => {
        setCart((previousCart) => ({
            ...previousCart,
            [productId]: !previousCart[productId],
        }));
    };

    const totalItemsInCart = Object.values(cart).filter(Boolean).length;

    return (
        <>
            <HeaderComponent toggleComponent={toggleComponent} totalItemsInCart={totalItemsInCart} />
            {currentComponent === 'About' ? (
                <AboutMeComponents />
            ) : (
                <ProductsListComponent products={mockData} onAddToCartClick={handleAddToCartClick} cart={cart} />
            )}
            <Footer />
        </>
    );
}

export default App;
