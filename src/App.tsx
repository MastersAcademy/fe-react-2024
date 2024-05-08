import { useState } from 'react';

import { AboutMeComponent } from '@/components/about/AboutMe.component.tsx';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { ProductsList } from '@/components/ProductsList/ProductsList.component.tsx';

import './App.css';

function App() {
    const [activePage, setActivePage] = useState('AboutMe');
    const renderComponent = () => {
        switch (activePage) {
            case 'AboutMe': {
                return <AboutMeComponent />;
            }
            case 'ProductList': {
                return <ProductsList />;
            }
        }
    };

    return (
        <>
            <HeaderComponent setActivePage={setActivePage} />
            <main className="mainContentWrapper">{renderComponent()}</main>
            <FooterComponent />
        </>
    );
}

export default App;
