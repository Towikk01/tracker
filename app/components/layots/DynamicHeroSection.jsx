'use client';
import React from 'react';
import Title from '../elements/Title';
import Description from '../elements/Description';
import Slider from '../elements/Slider';
import { productData } from '@/app/products';
import { motion } from 'framer-motion';

const containerVariants = {
    visible: {
        transition: {
            delayChildren: 3,
            staggerChildren: 0.1,
        },
    },
};

const DynamicHeroSection = ({ selectedProduct }) => {
    const product = productData[selectedProduct] || productData['Concox AT4'];

    return (
        <motion.section
            className="w-full max-w-[1440px] md:h-screen flex px-4 flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="flex flex-col items-center lg:w-2/5 gap-4 z-[5] md:gap-2 lg:mx-auto"
                initial={{ opacity: 0, translateY: -150 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                    delay: 2.5,
                    duration: 0.5,
                }}
            >
                <Title>{product.title}</Title>
            </motion.div>

            <motion.div
                className="flex flex-col  items-center z-[5] lg:w-2/5 gap-4 md:gap-2 lg:mx-auto"
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <Description>{product.description}</Description>
            </motion.div>
            <Slider selectedProduct={product} />
        </motion.section>
    );
};

export default DynamicHeroSection;
