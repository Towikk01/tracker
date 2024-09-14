import React from 'react';

const BenefitBlock = ({ title, description }) => {
    return (
        <div className="flex bg-[#F8F8F8] h-[180px] lg:h-[250px] justify-between rounded-2xl flex-col items-start p-6">
            <h3 className="text-deep font-medium text-18 lg:text-24">
                {title}
            </h3>
            <p className="text-14 text-secondary leading-4 lg:text-18">
                {description}
            </p>
        </div>
    );
};

export default BenefitBlock;
