import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go to About Page</Link>
    </div>
);

export default PageNotFound;
