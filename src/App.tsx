import { useEffect, useState } from 'react';

import AboutPage from '@/pages/about/About';
import Products from '@/pages/products/Products';

import Footer from './components/Footer/footer.component';
import Header from './components/Header/header.component.tsx';

import styles from './App.module.css';

function App() {
    const [showPage, setShowPage] = useState<'About' | 'ProductList'>('About');
    const [cartCount, setCartCount] = useState(0);
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme as 'light' | 'dark';
        } else {
            const isDarkModePreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return isDarkModePreferred ? 'dark' : 'light';
        }
    });

    const handleChangePage = (component: 'About' | 'ProductList') => {
        setShowPage(component);
    };

    useEffect(() => {
        const storedCartCount = localStorage.getItem('cartCount');
        if (storedCartCount) {
            setCartCount(Number.parseInt(storedCartCount, 10));
        }
    }, []);

    const addToCart = () => {
        const newCartCount = cartCount + 1;
        setCartCount(newCartCount);
        localStorage.setItem('cartCount', newCartCount.toString());
    };

    const toggleTheme = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <div className={`${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
                <Header handleChangePage={handleChangePage} cartCount={cartCount} toggleTheme={toggleTheme} theme={theme} />
                {showPage === 'About' && <AboutPage />}
                {showPage === 'ProductList' && <Products theme={theme} addToCart={addToCart} />}
                <Footer />
            </div>
        </>
    );
}

export default App;
