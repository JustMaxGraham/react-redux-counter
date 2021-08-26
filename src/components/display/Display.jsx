import React from 'react';
import './display.css'

const Display = ({
    children,
}) => {
    return (
        <div className="counter">
            {children}
        </div>
    )
}

export default Display;