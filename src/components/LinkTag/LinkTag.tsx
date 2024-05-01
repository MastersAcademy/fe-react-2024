import React from 'react';

export const LinkTag = ({ href, className, children, ...rest }: React.ComponentProps<'a'>) => (
    <a href={href} className={className} {...rest}>
        {children}
    </a>
);
