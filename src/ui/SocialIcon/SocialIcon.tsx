import React from 'react';

import styles from './socialIcon.module.css';

export function Icon({ children, href }: React.ComponentProps<'a'>) {
    return (
        <li className={styles.social_icon}>
            <a href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        </li>
    );
}
