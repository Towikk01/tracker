import React from 'react';

const numbers = ['+1 234 567 890', '+1 234 567 890', '+1 234 567 890'];

const Footer = () => {
    return (
        <footer className="flex px-4 z-20 max-w-[1440px] flex-col lg:w-full lg:justify-between lg:flex-row gap-2 items-center justify-center pt-8 pb-12">
            {numbers.map((number) => (
                <a
                    href={`tel:${number}`}
                    key={number}
                    className="text-18 lg:text-24 font-medium text-black"
                >
                    {number}
                </a>
            ))}
        </footer>
    );
};

export default Footer;
