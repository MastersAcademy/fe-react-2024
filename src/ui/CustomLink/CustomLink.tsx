import React from 'react';

export function CustomLink({ className, target = '_blank', children, ...restProps }: React.ComponentProps<'a'>) {
    return (
        <>
            <a target={target} {...restProps}>
                {children}
            </a>
        </>
    );
}
