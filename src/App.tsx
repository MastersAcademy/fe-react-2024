import { useState } from 'react';

import { About } from './components/About/About.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Header } from './components/header/Header.tsx';
import { Products } from './components/Products/Products.tsx';

import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Header onPageChange={handlePageChange} />
            {currentPage === 'About' && <About />}
            {currentPage === 'Products' && <Products />}
            <Footer />
        </>
    );
}

export default App;
