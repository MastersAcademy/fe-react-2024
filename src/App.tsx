import { AboutComponent } from './components/body/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

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
