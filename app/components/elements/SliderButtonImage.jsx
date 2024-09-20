'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const SliderButtonImage = ({ image, onClick, isActive, idx }) => {
    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            transition={{
                delay: 4 + idx * 0.1,
                duration: 0.35,
                ease: [0.42, 0, 0.58, 1],
            }}
            onClick={onClick}
            className={`${
                isActive && 'border-black'
            } hover:border-secondary transition-all lg:max-w-[120px] lg:max-h-20 duration-150 border w-full h-full rounded-sm`}
        >
            <Image className="w-full h-full" src={image} alt="" />
        </motion.button>
    );
};

export default SliderButtonImage;
