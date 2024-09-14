import React from 'react';

const Title = ({ children }) => {
    return (
        <h2 className="text-32 z-10 lg:text-48 md:leading-[62px] font-medium text-deep leading-[41.6px] text-wrap break-words text-center tracking-[-1px]">
            {children}
        </h2>
    );
};

export default Title;
