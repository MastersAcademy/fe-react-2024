import React, { useEffect, useState } from 'react';

import { AboutMeComponents } from '@/components/about/About_me.component.tsx';
import Footer from '@/components/footer/Footer.component.tsx';
import { ProductListComponent } from '@/components/productList/Product_list.component.tsx';
import { mockData } from '@/mock_data.ts';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    const [currentComponent, setCurrentComponent] = useState('About');
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

    const products = mockData;

    const toggleComponent = (componentName: string) => setCurrentComponent(componentName);

    const toggleProductSelection = (productId: number) => {
        setSelectedProducts((previousSelectedProducts) => {
            const updatedSelectedProducts = previousSelectedProducts.includes(productId)
                ? previousSelectedProducts.filter((id) => id !== productId)
                : [...previousSelectedProducts, productId];

            localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
            return updatedSelectedProducts;
        });
    };

    useEffect(() => {
        const storedSelectedProducts = localStorage.getItem('selectedProducts');
        if (storedSelectedProducts) {
            setSelectedProducts(JSON.parse(storedSelectedProducts));
        }
    }, []);

    return (
        <>
            <HeaderComponent toggleComponent={toggleComponent} products={products} selectedProducts={selectedProducts} />
            {currentComponent === 'About' ? (
                <AboutMeComponents />
            ) : (
                <ProductListComponent
                    products={products}
                    selectedProducts={selectedProducts}
                    toggleProductSelection={toggleProductSelection}
                />
            )}
            <Footer />
        </>
    );
}

export default App;
