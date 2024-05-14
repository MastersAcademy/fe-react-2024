import { useState } from 'react';

import { AboutMeComponents } from '@/components/about/About_me.component.tsx';
import Footer from '@/components/footer/Footer.component.tsx';
import { ProductsListComponent } from '@/components/productList/Product_list.component.tsx';
import { mockData } from '@/mock_data.ts';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    const [currentComponent, setCurrentComponent] = useState('About');

    const toggleComponent = (componentName: string) => setCurrentComponent(componentName);
    return (
        <>
            <HeaderComponent toggleComponent={toggleComponent} />
            {currentComponent === 'About' ? <AboutMeComponents /> : <ProductsListComponent products={mockData} />}
            <Footer />
        </>
    );
}

export default App;
