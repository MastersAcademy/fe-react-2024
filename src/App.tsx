import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <header>
                <HeaderComponent />
            </header>
            <main>
                <AboutComponent />
            </main>
            <footer>
                <FooterComponent />
            </footer>
        </>
    );
}

export default App;
