import React from 'react';
import Button from './Button';
import Popup from './PopUp';
import Link from 'next/link';

const PriceWithButton = ({ product }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-row justify-evenly lg:justify-around w-4/5 lg:w-full">
                <span className="text-18 lg:text-24 font-medium leading-6 text-blue">
                    {product.prices.new} грн
                </span>
                <span className="line-through text-18 lg:text-24 font-medium leading-6 text-secondary">
                    {product.prices.old} грн
                </span>
            </div>
            <div className="flex flex-row justify-evenly w-full lg:gap-4">
                <Link href="#form">
                    <Button text="Купити" color="blue" />
                </Link>
                <Popup product={product} />
            </div>
        </div>
    );
};

export default PriceWithButton;
