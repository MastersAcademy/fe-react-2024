// import { AboutMeComponent } from '@/components/about/AboutMe.component.tsx';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { ProductsList } from '@/components/ProductsList/ProductsList.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            {/* <AboutMeComponent />*/}
            <ProductsList />
            <FooterComponent />
        </>
    );
}

export default App;
