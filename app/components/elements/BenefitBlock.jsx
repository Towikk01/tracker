'use client';
import React from 'react';
import { motion } from 'framer-motion';
const BenefitBlock = ({ title, description, idx }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 + idx * 0.09 }}
            className="flex bg-[#F8F8F8] bg-opacity-80 h-[180px] lg:h-[250px] justify-between rounded-2xl flex-col items-start p-6"
        >
            <h3 className="text-deep font-medium text-18 lg:text-24">
                {title}
            </h3>
            <p className="text-14 text-secondary leading-4 lg:text-18">
                {description}
            </p>
        </motion.div>
    );
};

export default BenefitBlock;
