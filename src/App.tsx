import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

import './index.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <AboutComponent />
            <FooterComponent />
        </>
    );
}

export default App;
