import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgWidth?: number;
    imgHeight?: number;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, children, imgSrc, imgAlt, imgWidth, imgHeight }) => (
    <button onClick={onClick} disabled={disabled} className={`default-button ${className}`}>
        {imgSrc && <img src={imgSrc} alt={imgAlt} style={{ width: imgWidth, height: imgHeight }} />}
        {children}
    </button>
);

export default Button;
