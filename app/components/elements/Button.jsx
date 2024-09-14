'use client';
import React from 'react';

const Button = ({
    text,
    color,
    type = 'button',
    onClick,
    w = 'w-full md:w-fit',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-16 px-6 py-3 ${w}  leading-6 text-nowrap font-medium rounded-[32px] ${
                color === 'blue'
                    ? 'text-white bg-blue lg:px-14 lg:py-3'
                    : 'text-black bg-primary'
            } ${text === 'Надіслати заявку' ? 'self-start' : ''} `}
        >
            {text}
        </button>
    );
};

export default Button;
