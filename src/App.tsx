import { useEffect, useState } from 'react';

import AboutPage from '@/components/about/AboutPage';

import FiltersComponent from './components/Filters/Filters.component';
import Footer from './components/Footer/footer.component';
import Header from './components/Header/header.component.tsx';
import ProductList from './Models/ProductList';

import styles from './App.module.css';

function App() {
    const [showPage, setShowPage] = useState<'About' | 'ProductList'>('About');
    const [cartCount, setCartCount] = useState(0);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
    };

    return (
        <>
            <div className={`${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
                <Header handleChangePage={handleChangePage} cartCount={cartCount} toggleTheme={toggleTheme} />
                {showPage === 'ProductList' && <FiltersComponent />}
                {showPage === 'About' ? <AboutPage /> : <ProductList addToCart={addToCart} theme={theme} />}
                <Footer />
            </div>
        </>
    );
}

export default App;
