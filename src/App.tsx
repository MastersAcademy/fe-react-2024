import { AboutMeComponent } from './components/about/AboutMe.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    const name: string = `Roman Orlovskyi`;
    const nikName: string = `roman-orlovskyi-moc`;

    return (
        <>
            <HeaderComponent />
            <main>
                <AboutMeComponent name={name} nikName={nikName} />
            </main>
            <FooterComponent name={name} />
        </>
    );
}

export default App;
