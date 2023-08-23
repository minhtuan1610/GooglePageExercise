import React from "react";
import './Button.css';

const Button = ({children, handleClick, className}) => {
    return (
        <button onClick={handleClick} className={className}>{children}</button>
    );
}
export default Button;