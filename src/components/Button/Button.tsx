import type { ComponentProps } from 'react';
import React from 'react';

interface ButtonProps extends ComponentProps<'button'> {
    imgSrc?: string;
    imgAlt?: string;
    imgWidth?: number;
    imgHeight?: number;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, children, imgSrc, imgAlt, imgWidth, imgHeight, ...rest }) => (
    <button onClick={onClick} disabled={disabled} className={`default-button ${className}`} {...rest}>
        {imgSrc && <img src={imgSrc} alt={imgAlt} style={{ width: imgWidth, height: imgHeight }} />}
        {children}
    </button>
);

export { Button };
