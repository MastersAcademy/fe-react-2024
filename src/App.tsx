import { useState } from 'react';

import { AboutMeComponent } from '@/components/about/AboutMe.component.tsx';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { ProductsList } from '@/components/ProductsList/ProductsList.component.tsx';

import './App.css';

function App() {
    enum PageType {
        ABOUT_ME = 'AboutMe',
        PRODUCT_LIST = 'ProductList',
    }

    const [activePage, setActivePage] = useState(PageType.ABOUT_ME);
    const [totalCartCounter, setTotalCartCounter] = useState(0);
    const renderComponent = () =>
        activePage === PageType.ABOUT_ME ? (
            <AboutMeComponent />
        ) : (
            <ProductsList totalCartCounter={totalCartCounter} setTotalCartCounter={setTotalCartCounter} />
        );

    return (
        <>
            <HeaderComponent
                setActivePage={setActivePage}
                totalCartCounter={totalCartCounter}
                aboutPageName={PageType.ABOUT_ME}
                productPageName={PageType.PRODUCT_LIST}
            />
            <main className="mainContentWrapper">{renderComponent()}</main>
            <FooterComponent />
        </>
    );
}

export default App;
