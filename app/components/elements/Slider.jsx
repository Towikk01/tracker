'use client';
import { useState } from 'react';
import Image from 'next/image';
import SliderButton from './SliderButton';
import SliderButtonImage from './SliderButtonImage';
import PriceWithButton from './PriceWithButton';

const Slider = ({ selectedProduct }) => {
    const images = selectedProduct.images;
    const [imageIndex, setImageIndex] = useState(0);

    const showPrevSlide = () => {
        setImageIndex((prevIdx) =>
            prevIdx === 0 ? images.length - 1 : prevIdx - 1
        );
    };

    const showNextSlide = () => {
        setImageIndex((prevIdx) =>
            prevIdx === images.length - 1 ? 0 : prevIdx + 1
        );
    };

    return (
        <div className="flex flex-col h-full w-full gap-6">
            <div className="w-full h-full relative">
                <SliderButton onClick={showPrevSlide} />
                <SliderButton onClick={showNextSlide} idx={1} />
                <div className=" flex w-full h-full overflow-hidden lg:relative lg:-top-20 flex-row">
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            className="w-full h-full block shrink-0 grow-0 transition-all duration-300 ease-in-out"
                            src={img}
                            alt="123"
                            objectFit="cover"
                            style={{
                                translate: `${imageIndex * -100}%`,
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-6 w-full lg:flex-row-reverse lg:absolute lg:bottom-[10%] max-w-[1440px] px-4 justify-between">
                <div className="flex top-0 flex-row gap-4 justify-between lg:mr-4">
                    {images.slice(1).map((img, idx) => (
                        <SliderButtonImage
                            onClick={() => setImageIndex(idx + 1)}
                            key={idx}
                            image={img}
                            isActive={imageIndex === idx + 1}
                        />
                    ))}
                </div>
                <PriceWithButton product={selectedProduct} />
            </div>
        </div>
    );
};

export default Slider;
