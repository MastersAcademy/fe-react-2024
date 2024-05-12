import { AboutComponent } from './components/About/About.component.tsx';
import { FooterComponent } from './components/Footer/Footer.component.tsx';
import { HeaderComponent } from './components/Header/Header.component.tsx';

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
