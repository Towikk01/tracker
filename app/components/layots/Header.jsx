'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ProductButton from '../elements/ProductButton';

const links = [
    { name: 'Concox AT4', slug: 'at4' },
    { name: 'Concox WeTrack Lite', slug: 'wetrack-lite' },
    { name: 'Concox WeTrack 2', slug: 'wetrack2' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 2,
            staggerChildren: 0.2,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
};

const Header = ({ onSelectProduct, selectedProduct }) => {
    return (
        <motion.header
            className="flex flex-row z-[5] max-w-[1440px] w-full gap-4 px-6 py-6 overflow-x-scroll md:justify-center lg:gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {links.map((link, idx) => {
                const isActive = link.name === selectedProduct;
                return (
                    <motion.div key={'product' + idx} variants={childVariants}>
                        <ProductButton
                            onClick={() => onSelectProduct(link.name)}
                            isActive={isActive}
                        >
                            {link.name}
                        </ProductButton>
                    </motion.div>
                );
            })}
        </motion.header>
    );
};

export default Header;
