import { useState } from 'react';

import Products from '@/components/Product/ProductList';
import { useTheme } from '@/Context/ThemeContext';
import AboutPage from '@/pages/about/About';

import Footer from './components/Footer/footer.component';
import Header from './components/Header/header.component.tsx';

import styles from './App.module.css';

function App() {
    const [showPage, setShowPage] = useState<'About' | 'ProductList'>('About');

    const { theme } = useTheme();

    const handleChangePage = (component: 'About' | 'ProductList') => {
        setShowPage(component);
    };

    return (
        <>
            <div className={`${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
                <Header handleChangePage={handleChangePage} />
                {showPage === 'About' ? <AboutPage /> : <Products />}
                <Footer />
            </div>
        </>
    );
}

export default App;
