import { useState } from 'react';

import { AboutMeComponent } from '@/components/about/AboutMe.component.tsx';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { MenuComponent } from '@/components/Menu/Menu.component.tsx';
import { ProductsList } from '@/components/ProductsList/ProductsList.component.tsx';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider.component.tsx';

import './App.css';
export enum PageType {
    ABOUT_ME = 'AboutMe',
    PRODUCT_LIST = 'ProductList',
    MENU = 'Menu',
}

function App() {
    const localStorageActivePage = localStorage.getItem('activePage') === 'ProductList' ? PageType.PRODUCT_LIST : PageType.ABOUT_ME;
    const [activePage, setActivePage] = useState<PageType>(localStorageActivePage);
    const [totalCartCounter, setTotalCartCounter] = useState(0);
    const renderComponent = () => {
        switch (activePage) {
            case PageType.ABOUT_ME: {
                return <AboutMeComponent />;
            }
            case PageType.PRODUCT_LIST: {
                return <ProductsList totalCartCounter={totalCartCounter} setTotalCartCounter={setTotalCartCounter} />;
            }
            case PageType.MENU: {
                return <MenuComponent setActivePage={setActivePage} />;
            }
        }
    };

    return (
        <ThemeProvider>
            <HeaderComponent setActivePage={setActivePage} totalCartCounter={totalCartCounter} activePage={activePage} />
            <main className="mainContentWrapper">{renderComponent()}</main>
            <FooterComponent />
        </ThemeProvider>
    );
}

export default App;
