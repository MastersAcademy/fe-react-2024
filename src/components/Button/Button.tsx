import type { ComponentProps } from 'react';
import React from 'react';

import styles from './button.module.css';

interface ButtonProps extends ComponentProps<'button'> {
    imgSrc: string;
    imgAlt?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, children, imgSrc, imgAlt, ...rest }) => (
    <button onClick={onClick} disabled={disabled} className={`default-button ${className}`} {...rest}>
        {imgSrc && <img src={imgSrc} alt={imgAlt} className={styles.buttonIconWH} />}
        {children}
    </button>
);

export { Button };
