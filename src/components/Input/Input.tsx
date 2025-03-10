import React, { FC } from 'react';

interface InputProps {
    classname?: string;
    placeholder?: string;
    type?: string;
}

const Input: FC<InputProps> = ({ classname, placeholder, type }) => {
    return (
        <input
            className={`${classname}`}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default Input;