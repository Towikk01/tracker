'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticlesBG from './components/layots/Particles';
import DynamicHeroSection from './components/layots/DynamicHeroSection';
import AboutSection from './components/layots/AboutSection';
import Form from './components/layots/Form';
import Header from './components/layots/Header';
import Footer from './components/layots/Footer';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    subsets: ['latin'],
});
export default function Home() {
    const [selectedProduct, setSelectedProduct] = useState('Concox AT4');

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };
    return (
        <motion.body
            className={`${poppins.variable} antialiased w-full overflow-hidden origin-center bg-black  lg:mx-auto`}
            animate={{ clipPath: 'circle(110% at 10%)' }}
            onAnimationComplete={() => (document.body.style.overflow = 'unset')}
            transition={{ duration: 2, delay: 0.5 }}
        >
            <ParticlesBG />

            <main className="flex gap-4 lg:gap-8 flex-col w-full items-center  mx-auto bg-white ">
                <Header
                    onSelectProduct={handleSelectProduct}
                    selectedProduct={selectedProduct}
                />
                <DynamicHeroSection selectedProduct={selectedProduct} />
                <AboutSection />
                <Form />
                <Footer />
            </main>
        </motion.body>
    );
}
