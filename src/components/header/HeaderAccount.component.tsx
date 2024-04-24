import RegisterIconSVG from '@/assets/icons/header/account.svg?react';
import LoginIconSVG from '@/assets/icons/header/log_out.svg?react';

import styles from './header-account.module.css';

export const HeaderAccountComponent = () => (
    <div className={styles.headerAccount}>
        <a href="/login" className={`${'button'} ${styles.loginButton}`}>
            <LoginIconSVG />
            Login
        </a>
        <a href="/register" className={'button'}>
            <RegisterIconSVG />
            Sign Up
        </a>
    </div>
);
