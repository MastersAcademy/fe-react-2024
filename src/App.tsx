import { useState } from 'react';

import AboutPage from '@/components/about/AboutPage';
import ProductList from '@/Models/ProductList';

import Footer from './components/Footer/footer.component';
import Header from './components/Header/header.component.tsx';

// import styles from './App.module.css';

function App() {
    const [isShowAbout, setIsShowAbout] = useState(true);

    const toggleAbout = () => {
        setIsShowAbout(true);
    };

    const toggleProducts = () => {
        setIsShowAbout(false);
    };

    return (
        <>
            <Header toggleAbout={toggleAbout} toggleProducts={toggleProducts} />
            {isShowAbout ? <AboutPage /> : <ProductList />}
            <Footer />
        </>
    );
}

export default App;
