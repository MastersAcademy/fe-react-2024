import React from 'react';
import ReactDOM from 'react-dom/client';

import { Footer } from '@/components/footer/Footer.component.tsx';
import { Header } from '@/components/header/Header.component.tsx';
// import About from './components/about/About.tsx';
import { ProductsList } from '@/components/ProductsList/ProductsList.component.tsx';

import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <Header />
        <ProductsList />
        {/* <About />*/}
        <Footer />
    </React.StrictMode>,
);
