'use client';
import React, { useState } from 'react';
import Title from '../elements/Title';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        checkedItem: 'Concox AT4',
    });
    const [errors, setErrors] = useState({});
    const options = ['Concox AT4', 'Concox WeTrack Lite', 'Concox WeTrack 2'];

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleChange = (event) => {
        const { name, value, type } = event.target;

        if (type === 'radio') {
            setFormData({
                ...formData,
                checkedItem: value,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, phone } = formData;
        const errors = {};

        if (!name) {
            errors.name = 'Name is required';
        } else {
            formData.name = name.charAt(0).toUpperCase() + name.slice(1);
        }

        if (!phone) {
            errors.phone = 'Phone number is required';
        } else if (!validatePhone(phone)) {
            errors.phone = 'Phone number must be exactly 10 digits';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            toast.error('Please fix the errors before submitting.');
            return;
        }

        const chatId = '-4577751515';
        const token = '7248973624:AAFvsJ8kGvHvWYTyeK6AuohJW7rRyyrUTc8';

        const message = `Новый заказ \n Имя: ${formData.name} \n Номер телефона: ${formData.phone} \n Выбранный трекер: ${formData.checkedItem}`;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${token}/sendMessage`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                    }),
                }
            );

            if (response.ok) {
                console.log('Message sent successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    checkedItem: 'Concox AT4',
                });
                setErrors({});
                toast.success('Message sent successfully!');
            } else {
                console.error('Failed to send message');
                toast.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const mobileAnimation = { opacity: 1, x: 0 };
    const desktopAnimation = { opacity: 1, y: 0 };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: 'anticipate' }}
            className="flex flex-col max-w-[1440px] bg-opacity-75 z-[5] opacity-95 gap-16 bg-backgroundCard justify-between lg:items-center h-full w-full px-4 py-10 rounded-2xl"
        >
            <motion.div
                initial={{ opacity: 0, y: -150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
            >
                <Title>Форма замовлення</Title>
            </motion.div>
            <form
                id="form"
                onSubmit={handleSubmit}
                className="flex form lg:items-center flex-col gap-8 lg:w-1/2"
            >
                <motion.div
                    className="flex flex-col lg:w-full items-start gap-2"
                    initial={
                        isMobile
                            ? { y: -100, opacity: 0 }
                            : { x: -200, opacity: 0 }
                    }
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <label className="text-black" htmlFor="name">
                        Ваше імʼя
                    </label>
                    <Input
                        type="text"
                        placeholder=""
                        name="name"
                        className="text-black"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
                </motion.div>
                <motion.div
                    className="flex flex-col lg:w-full items-start gap-2"
                    initial={
                        isMobile
                            ? { y: -100, opacity: 0 }
                            : { x: 200, opacity: 0 }
                    }
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <label className="text-black" htmlFor="phone">
                        Номер телефону
                    </label>
                    <Input
                        className="text-black"
                        type="text"
                        placeholder=""
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                    )}
                </motion.div>
                <div className="flex flex-col items-start gap-1 lg:w-full">
                    <motion.label
                        className="text-14 font-normal text-black lg:text-18 leading-5 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Який пристрій GPS ви обрали?
                    </motion.label>
                    <div className="lg:flex-row flex flex-col lg:w-full lg:justify-between">
                        {options.map((option, idx) => (
                            <motion.label
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: idx * 0.05 + 0.5,
                                    duration: 0.3,
                                    ease: 'backInOut',
                                }}
                                key={option}
                                className={`p-2 ml-1 gap-2 flex rounded lg:text-16 transition-all duration-150 ${
                                    formData.checkedItem === option
                                        ? 'bg-primary text-deep rounded-lg'
                                        : 'text-black'
                                }`}
                            >
                                <input
                                    type="radio"
                                    value={option}
                                    name="checkedItem"
                                    checked={formData.checkedItem === option}
                                    onChange={handleChange}
                                />
                                {option}
                            </motion.label>
                        ))}
                    </div>
                    <motion.label
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={`p-2 gap-2 flex text-14 text-secondary rounded transition-all duration-150`}
                    >
                        <input
                            type="checkbox"
                            required
                            onChange={handleChange}
                        />{' '}
                        I accept the Terms
                    </motion.label>
                </div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <Button
                        text="Надіслати заявку"
                        color="blue"
                        type="submit"
                    />
                </motion.div>
            </form>
            <ToastContainer position="bottom-right" />
        </motion.div>
    );
};

export default Form;
