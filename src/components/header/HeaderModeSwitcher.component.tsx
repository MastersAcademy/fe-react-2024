import DividerIconSVG from '@/assets/icons/header/divider.svg?react';
import MoonIconSVG from '@/assets/icons/header/moon.svg?react';
import SunIconSVG from '@/assets/icons/header/sun.svg?react';

import styles from './header-mode-switcher.module.css';

export const HeaderModeSwitcherComponent = () => (
    <div className={styles.headerModeSwitcher}>
        <a href="#">
            <SunIconSVG />
        </a>
        <DividerIconSVG />
        <a href="#">
            <MoonIconSVG />
        </a>
    </div>
);
