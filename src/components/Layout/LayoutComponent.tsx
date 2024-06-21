import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer/footer.component';
import Header from '@/components/Header/header.component';

import styles from './LayoutComponent.module.css';

const LayoutComponent: React.FC = () => (
    <div className={styles.layout}>
        <Header />
        <main className={styles.mainContent}>
            <Outlet />
        </main>
        <Footer />
    </div>
);

export default LayoutComponent;
