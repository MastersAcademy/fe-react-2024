import React from 'react';

interface FooterIconProps {
    icon: string;
    url: string;
    className?: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ icon, url, className }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="icon" className={`default-image ${className}`} />
    </a>
);

export default FooterIcon;
