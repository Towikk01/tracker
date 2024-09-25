'use client';
import React from 'react';
import { Poppins } from 'next/font/google';

import Header from './Header';
import Footer from './Footer';
import ParticlesBG from './Particles';

import AboutSection from './AboutSection';
import Form from './Form';
import { motion } from 'framer-motion';
const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    subsets: ['latin'],
});

const MainPage = ({ children }) => {
    return (
        <motion.body
            className={`${poppins.variable} antialiased w-full overflow-hidden origin-center bg-black  lg:mx-auto`}
            animate={{ clipPath: 'circle(110% at 10%)' }}
            onAnimationComplete={() => (document.body.style.overflow = 'unset')}
            transition={{ duration: 2, delay: 0.5 }}
        >
            <ParticlesBG />
            <main className="flex gap-4 lg:gap-8 flex-col w-full items-center  mx-auto bg-white ">
                <Header />
                {children}
                <AboutSection />
                <Form />
                <Footer />
            </main>
        </motion.body>
    );
};

export default MainPage;
