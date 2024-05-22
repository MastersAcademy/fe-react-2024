import React, { useEffect, useState } from 'react';

import { AboutMeComponents } from '@/components/about/About_me.component.tsx';
import Footer from '@/components/footer/Footer.component.tsx';
import { ProductListComponent } from '@/components/productList/Product_list.component.tsx';
import { mockData } from '@/mock_data.ts';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';
import './index.css';

function App() {
    const [currentComponent, setCurrentComponent] = useState('About');
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredName, setFilteredName] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : false;
    });

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

    const toggleTheme = () => {
        setIsDarkTheme((previousTheme: boolean) => {
            const isDark: boolean = !previousTheme;
            localStorage.setItem('theme', JSON.stringify(isDark));
            return isDark;
        });
    };

    useEffect(() => {
        const storedSelectedProducts = localStorage.getItem('selectedProducts');
        if (storedSelectedProducts) {
            setSelectedProducts(JSON.parse(storedSelectedProducts));
        }
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = isDarkTheme ? '#111' : '#FFF';
    }, [isDarkTheme]);

    useEffect(() => {
        const rootElement = document.documentElement;
        if (isDarkTheme) {
            rootElement.classList.add('dark-theme');
        } else {
            rootElement.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    return (
        <>
            <HeaderComponent
                toggleComponent={toggleComponent}
                products={products}
                selectedProducts={selectedProducts}
                onThemeToggle={toggleTheme}
                isDarkTheme={isDarkTheme}
            />
            {currentComponent === 'About' ? (
                <AboutMeComponents />
            ) : (
                <ProductListComponent
                    products={products}
                    selectedProducts={selectedProducts}
                    toggleProductSelection={toggleProductSelection}
                    searchQuery={searchQuery}
                    filteredName={filteredName}
                    sortOption={sortOption}
                    setSearchQuery={setSearchQuery}
                    setFilteredName={setFilteredName}
                    setSortOption={setSortOption}
                    isDarkTheme={isDarkTheme} // Додавання isDarkTheme до props
                />
            )}
            <Footer />
        </>
    );
}

export default App;
