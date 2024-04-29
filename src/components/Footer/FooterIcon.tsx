import React from 'react';

interface FooterIconProps {
    icon: string;
    url: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ icon, url }) => (
    <a href={url}>
        <img src={icon} alt="icon" />
    </a>
);

export default FooterIcon;
