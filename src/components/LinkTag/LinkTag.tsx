import React from 'react';

interface AGroup extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
export const LinkTag: React.ComponentType<AGroup> = ({ href, className, children, ...rest }) => (
    <a href={href} className={className} {...rest}>
        {children}
    </a>
);
