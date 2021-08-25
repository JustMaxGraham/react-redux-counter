import React from 'react';
import './input.css'

const Input = ({
    children,
    type,
    value,
    placeholder,
    onChange
}) => {
    return (
        <input 
            onChange={onChange}
            value={value}
            placeholder={placeholder}>
        </input>
    )
}

export default Input;