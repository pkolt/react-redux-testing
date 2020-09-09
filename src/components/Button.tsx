import React from 'react';

type ButtonProps = React.PropsWithChildren<{
    modifier?: string;
}>

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { modifier, children } = props;
    return (
        <button type="submit" className={`btn ${modifier ?? ''}`}>{children}</button>
    );
}

export default Button;
