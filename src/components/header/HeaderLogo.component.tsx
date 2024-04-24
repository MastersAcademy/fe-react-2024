import LogoIconSVG from '@/assets/icons/header/logo.svg?react';

import styles from './header-logo.module.css';

export const HeaderLogoComponent = () => (
    <div className={styles.headerLogo}>
        <LogoIconSVG />
    </div>
);
