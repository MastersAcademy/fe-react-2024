import { Footer } from './components/footer';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { AboutPage } from './pages/about-page';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <main>
                <AboutPage />
            </main>
            <Footer />
        </>
    );
}

export default App;
