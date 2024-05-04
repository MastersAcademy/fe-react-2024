import { FooterComponent } from '@/components/footer/Footer.component.tsx';
// import { AboutMeComponents } from '@/components/about/About-me.component.tsx';
import { ProductsListComponent } from '@/components/productsList/product-list.component.tsx';
import { mockData } from '@/mock-data.ts';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <ProductsListComponent products={mockData} />
            {/* <AboutMeComponents />*/}
            <FooterComponent />
        </>
    );
}

export default App;
