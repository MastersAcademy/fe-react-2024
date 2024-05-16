import React from 'react';

interface FooterIconProps {
    icon: string;
    url: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ icon, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="Icon" />
    </a>
);

export default FooterIcon;
