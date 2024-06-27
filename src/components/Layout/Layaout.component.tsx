import { Outlet } from 'react-router-dom';

import FooterComponent from '@/components/Footer/footer.component';
import HeaderComponent from '@/components/Header/header.component';

const LayoutComponent: React.FC = () => (
    <>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
    </>
);

export default LayoutComponent;
