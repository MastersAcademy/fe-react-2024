import React from 'react';

import FbIcon from '@assets/fb.svg?react';
import InstIcon from '@assets/insta.svg?react';
import LinkIcon from '@assets/linkedin.svg?react';

import Link from '../Link/Link.tsx';

import styles from './footericon.module.css';

const FooterIcon: React.FC = ({ ...restProps }) => (
    <div className={styles.footerIcons}>
        <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FbIcon />
        </Link>

        <Link href="https://www.linkedin.com/in/artur-kobylatsky/" target="_blank" rel="noopener noreferrer">
            <LinkIcon />
        </Link>

        <Link href="https://www.instagram.com/art_k_z/" target="_blank" rel="noopener noreferrer">
            <InstIcon />
        </Link>
    </div>
);

export { FooterIcon };
