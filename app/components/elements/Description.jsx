import React from 'react';

const Description = ({ children }) => {
    return (
        <p className="text-14 lg:text-18 font-normal z-10 text-secondary leading-[21px] text-wrap break-words text-center ">
            {children}
        </p>
    );
};

export default Description;
