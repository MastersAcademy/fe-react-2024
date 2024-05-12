import { useState } from 'react';

import { AboutMeComponents } from './components/about/About-me.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProductsListComponent } from './components/productsList/Product-list.component.tsx';
import { mockData } from './mock-data.ts';

import './App.css';

function App() {
    const [currentComponent, setCurrentComponent] = useState('About');

    const navigationComponent = (componentName: string) => setCurrentComponent(componentName);
    return (
        <>
            <HeaderComponent navigationComponent={navigationComponent} />
            {currentComponent === 'About' ? <AboutMeComponents /> : <ProductsListComponent products={mockData} />}
            <FooterComponent />
        </>
    );
}

export default App;
