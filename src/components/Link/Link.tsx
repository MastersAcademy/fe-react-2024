import type { ComponentProps } from 'react';

const Link = ({ href, target, rel, children, className, ...restProps }: ComponentProps<'a'>) => (
    <a href={href} target={target} rel={rel} className={`default-link ${className}`} {...restProps}>
        {children}
    </a>
);

export default Link;
