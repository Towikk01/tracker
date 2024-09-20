import { useState } from 'react';
import Button from './Button';
import Title from './Title';
import Link from 'next/link';

export default function Popup({ product }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    };

    const features = product.modalWindow.tags;

    return (
        <>
            <Button
                w="w-fit"
                onClick={handleOpen}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
                text="Дізнатись більше"
            />

            {isOpen && (
                <div className="fixed inset-0 flex  justify-center bg-black bg-opacity-50 lg:items-center z-[100] px-4 py-5">
                    <div className="bg-white relative lg:max-w-[1440px] rounded-3xl shadow-lg w-full lg:h-fit max-h-[90vh] overflow-y-auto p-6 lg:px-20 lg:py-10">
                        <div className="flex justify-between items-center">
                            <Title>Опис</Title>
                            <button
                                onClick={handleClose}
                                className="text-32 absolute top-6 right-8"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mt-4 text-sm lg:w-[90%] lg:text-18 text-secondary">
                            <p>{product.modalWindow.descriptionFirst}</p>
                            <p className="mt-4">
                                {product.modalWindow.descriptionSecond || null}
                            </p>
                            <div className="mt-6 flex flex-col gap-2 lg:grid lg:grid-cols-3">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-backgroundCard text-14 lg:text-18 lg:leading-5 text-deep leading-4 rounded-md px-4 py-6"
                                    >
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer with buttons */}
                        <div className="mt-6 flex flex-col w-full gap-2 lg:flex-row lg:gap-4">
                            <Link href="#form" onClick={handleClose}>
                                <Button text="Замовити" color="blue" />
                            </Link>
                            <Button text="Закрити" onClick={handleClose} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
