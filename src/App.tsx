import { useState } from 'react';

import { AboutMeComponent } from '@/components/about/AboutMe.component.tsx';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { ProductsList } from '@/components/ProductsList/ProductsList.component.tsx';

import './App.css';

function App() {
    const ABOUT_ME: string = 'AboutMe';
    const PRODUCT_LIST: string = `ProductList`;

    const [activePage, setActivePage] = useState('AboutMe');
    const renderComponent = () => (activePage === ABOUT_ME ? <AboutMeComponent /> : <ProductsList />);

    return (
        <>
            <HeaderComponent setActivePage={setActivePage} aboutPageName={ABOUT_ME} productPageName={PRODUCT_LIST} />
            <main className="mainContentWrapper">{renderComponent()}</main>
            <FooterComponent />
        </>
    );
}

export default App;
