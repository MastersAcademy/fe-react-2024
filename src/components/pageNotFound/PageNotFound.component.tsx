import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes.ts';

import styles from './PageNotFound.module.css';

const PageNotFound: React.FC = () => (
    <>
        <div className={styles.flexNotFound}>
            <h2>Page Not Found</h2>
            <Link className={styles.backToThePage} to={ROUTES.ABOUT}>
                Back to About Page
            </Link>
        </div>
    </>
);

export default PageNotFound;
