'use client';
import { useState } from 'react';
import DynamicHeroSection from './components/layots/DynamicHeroSection';
import AboutSection from './components/layots/AboutSection';
import Form from './components/layots/Form';
import Header from './components/layots/Header';
import Footer from './components/layots/Footer';

export default function Home() {
    const [selectedProduct, setSelectedProduct] = useState('Concox AT4');

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };
    return (
        <main className="flex lg:gap-8 flex-col w-full items-center  mx-auto bg-white ">
            <Header
                onSelectProduct={handleSelectProduct}
                selectedProduct={selectedProduct}
            />
            <DynamicHeroSection selectedProduct={selectedProduct} />
            <AboutSection />
            <Form />
            <Footer />
        </main>
    );
}
