import { useState } from 'react';

import { About } from '@/components/about/About.component.tsx';
import { Footer } from '@/components/footer/Footer.component.tsx';
import { Header } from '@/components/header/Header.component.tsx';
import { ProductList } from '@/components/productList/ProductList.component.tsx';
import type { ActivePage } from '@/types/states.ts';

import styles from './App.module.css';

function App() {
    const [activePage, setActivePage] = useState<ActivePage>('about');

    const handleActivePage = (page: ActivePage) => {
        setActivePage(page);
    };
    return (
        <div className={styles.mainContainer}>
            <Header activePage={activePage} onChange={handleActivePage} />

            {activePage === 'about' ? <About /> : <ProductList />}

            <Footer />
        </div>
    );
}

export default App;
