import { AboutMeComponents } from '@/components/about/About-me.component.tsx';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <AboutMeComponents />
            <FooterComponent />
        </>
    );
}

export default App;
