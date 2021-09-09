import React from 'react';
import './button.css'

const STYLES = [
    'positive', 
    'negative'
];

const Button = ({
     children,
     type,
     onClick,
     buttonStyle,
}
) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    console.log("ButtonStyle: ", checkButtonStyle)

    return (
        <button className={checkButtonStyle} onClick={onClick} type={type}>
            {children}
        </button>
    )
};

export default Button;