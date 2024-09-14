import React from 'react';

const ProductButton = ({ children, isActive, onClick }) => {
    const active = isActive ? 'bg-blue text-white' : 'bg-primary text-black';

    return (
        <button
            onClick={onClick}
            className={`py-1 text-xs md:text-16 text-nowrap px-3 md:px-4 md:py-2 ${active} rounded-2xl `}
        >
            {children}
        </button>
    );
};

export default ProductButton;
