import React from 'react';

import { FooterInfoComponent } from './FooterInfo.component.tsx';
import { FooterSocialIconsComponent } from './FooterSocialIcons.component.tsx';

import styles from './footer.module.css';

interface FooterProps {
    name: string;
}

export const FooterComponent: React.FC<FooterProps> = ({ name }) => (
    <>
        <footer className={styles.footer}>
            <div className={styles.footerDivider}></div>
            <FooterSocialIconsComponent />
            <FooterInfoComponent name={name} />
        </footer>
    </>
);
