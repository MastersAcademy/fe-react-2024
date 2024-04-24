import styles from './header-navigation.module.css';

export const HeaderNavigationComponent = () => (
    <ul className={styles.headerNav}>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/products">Products</a>
        </li>
    </ul>
);
