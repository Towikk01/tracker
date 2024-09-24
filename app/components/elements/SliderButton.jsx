'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SliderButton = ({ idx, onClick }) => {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className={`bg-transparent z-20 top-12 text-24 rounded-full p-4 flex border-primary border items-center justify-center md:top-56 absolute w-1.5 h-3 ${
                idx > 0 ? 'rotate-180 right-0' : 'left-0'
            }`}
            onClick={onClick}
        >
            {idx < 0 ? '>' : '<'}
        </motion.button>
    );
};

export default SliderButton;
