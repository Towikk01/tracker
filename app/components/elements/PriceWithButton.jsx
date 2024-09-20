'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Button from './Button';
import Popup from './PopUp';
import Link from 'next/link';

const PriceWithButton = ({ product }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-row justify-evenly lg:justify-around w-4/5 lg:w-full">
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 3.8, duration: 0.6 }}
                    className="text-18 lg:text-24 font-medium leading-6 text-blue"
                >
                    {product.prices.new} грн
                </motion.span>
                <motion.span
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 3.9, duration: 0.5 }}
                    className="line-through text-18 lg:text-24 font-medium leading-6 text-secondary"
                >
                    {product.prices.old} грн
                </motion.span>
            </div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 4.2, duration: 0.8 }}
                className="flex flex-row justify-evenly w-full gap-1 lg:gap-4"
            >
                <Link href="#form">
                    <Button text="Купити" color="blue" />
                </Link>
                <Popup product={product} />
            </motion.div>
        </div>
    );
};

export default PriceWithButton;
