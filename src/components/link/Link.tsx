const Link = ({ target = '_blank', children, ...restProps }: React.ComponentProps<'a'>) => (
    <a target={target} {...restProps} rel="noreferrer">
        {children}
    </a>
);

export default Link;
