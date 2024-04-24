import { HeaderAccountComponent } from './HeaderAccount.component.tsx';
import { HeaderCartComponent } from './HeaderCart.component.tsx';
import { HeaderLogoComponent } from './HeaderLogo.component.tsx';
import { HeaderModeSwitcherComponent } from './HeaderModeSwitcher.component.tsx';
import { HeaderNavigationComponent } from './HeaderNavigation.component.tsx';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={`${styles.header} ${styles.headerColumnWrapper}`}>
        <div className={styles.headerColumn}>
            <div className={styles.headerColumnContainer}>
                <HeaderLogoComponent />
                <HeaderModeSwitcherComponent />
            </div>
        </div>
        <div className={styles.headerColumn}>
            <div className={styles.headerColumnWrapper}>
                <div className={styles.headerColumn}>
                    <HeaderNavigationComponent />
                </div>
                <div className={styles.headerColumn}>
                    <div className={styles.headerColumnContainer}>
                        <HeaderCartComponent />
                        <HeaderAccountComponent />
                    </div>
                </div>
            </div>
        </div>
    </header>
);
