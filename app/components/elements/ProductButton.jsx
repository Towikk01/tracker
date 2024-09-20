'use client';
import React from 'react';

import { motion } from 'framer-motion';

const ProductButton = ({ children, isActive, onClick }) => {
    const active = isActive ? 'bg-blue text-white' : 'bg-primary text-black';

    return (
        <motion.button

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: '2deg' }}
            onClick={onClick}
            className={`py-1 text-xs md:text-16  text-nowrap px-3 md:px-4 md:py-2 ${active} rounded-2xl `}
        >
            {children}
        </motion.button>
    );
};

export default ProductButton;
