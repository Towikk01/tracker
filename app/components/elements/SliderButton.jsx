'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SliderButton = ({ idx, onClick }) => {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className={`bg-transparent z-20 top-12 md:top-56 absolute w-1.5 h-3 ${
                idx > 0 ? 'rotate-180 right-0' : 'left-0'
            }`}
            onClick={onClick}
        >
            <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 1L1 7L7 13"
                    stroke="#1E1E1E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </motion.button>
    );
};

export default SliderButton;
