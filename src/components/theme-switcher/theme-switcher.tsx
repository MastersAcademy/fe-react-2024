import moon from '@/assets/Moon.svg';
import sun from '@/assets/Sun.svg';

import styles from './theme-switcher.module.css';

export const ThemeSwitcher = () => (
    <div className={styles['theme-switcher']}>
        <button className={styles['theme-switcher__button']}>
            <img src={sun} />
        </button>
        <div className={styles['theme-switcher__separator']}></div>
        <button className={styles['theme-switcher__button']}>
            <img src={moon} />
        </button>
    </div>
);
