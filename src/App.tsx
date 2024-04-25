import { AboutMeComponents } from '@/components/about/About-me.component.tsx';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <AboutMeComponents />
        </>
    );
}

export default App;
