import React from 'react';
import Title from '../elements/Title';
import Description from '../elements/Description';
import Slider from '../elements/Slider';
import { productData } from '@/app/products';

const DynamicHeroSection = ({ selectedProduct }) => {
    const product = productData[selectedProduct] || productData['Concox AT4'];
    return (
        <section className="w-full h-full flex px-4 flex-col">
            <div className="flex flex-col items-center lg:w-2/5 gap-4 md:gap-2 lg:mx-auto">
                <Title>{product.title}</Title>
                <Description>{product.description}</Description>
            </div>
            <Slider selectedProduct={product} />
        </section>
    );
};

export default DynamicHeroSection;
