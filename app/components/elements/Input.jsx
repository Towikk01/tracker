import React from 'react';

const Input = ({ type, placeholder, value, onChange, name }) => {
    return (
        <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            className="text-black rounded-xl w-full border border-secondary p-3"
        />
    );
};

export default Input;
