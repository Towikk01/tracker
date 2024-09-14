import Image from 'next/image';
import React from 'react';

const SliderButtonImage = ({ image, onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className={`${
                isActive && 'border-black'
            } hover:border-secondary transition-all lg:max-w-[120px] lg:max-h-20 duration-150 border w-full h-full rounded-sm`}
        >
            <Image className="w-full h-full" src={image} alt="" />
        </button>
    );
};

export default SliderButtonImage;
