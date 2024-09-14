'use client';
import React from 'react';
import ProductButton from '../elements/ProductButton';
const links = ['Concox AT4', 'Concox WeTrack Lite', 'Concox WeTrack 2'];

const Header = ({ onSelectProduct, selectedProduct }) => {
    return (
        <header className="flex flex-row gap-4 px-6 py-6 overflow-x-scroll md:justify-center lg:gap-8  items-center">
            {links.map((link, idx) => {
                const isActive = link === selectedProduct;
                return (
                    <ProductButton
                        onClick={() => onSelectProduct(link)}
                        key={'product' + idx}
                        isActive={isActive}
                    >
                        {link}
                    </ProductButton>
                );
            })}
        </header>
    );
};

export default Header;
