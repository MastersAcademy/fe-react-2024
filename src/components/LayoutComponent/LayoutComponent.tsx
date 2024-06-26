import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

function LayoutComponent() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );

}

export default LayoutComponent;
