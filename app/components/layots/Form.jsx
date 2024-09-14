'use client';
import React, { useState } from 'react';
import Title from '../elements/Title';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    return (
        <div className="flex flex-col gap-16 bg-backgroundCard justify-between lg:items-center h-full w-full px-4 py-10 rounded-2xl">
            <Title>Форма замовлення</Title>
            <form
                id="form"
                onSubmit={handleSubmit}
                className="flex form lg:items-center flex-col gap-8 lg:w-1/2"
            >
                <div className="flex flex-col lg:w-full items-start gap-2">
                    <label htmlFor="name">Ваше імʼя</label>
                    <Input
                        type="text"
                        placeholder=""
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
                </div>
                <div className="flex flex-col lg:w-full items-start gap-2">
                    <label htmlFor="phone">Номер телефону</label>
                    <Input
                        type="text"
                        placeholder=""
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                    )}
                </div>
                <div className="flex flex-col items-start gap-1 lg:w-full">
                    <label className="text-14 font-normal lg:text-18 leading-5 mb-2">
                        Який пристрій GPS ви обрали?
                    </label>
                    <div className="lg:flex-row flex flex-col lg:w-full lg:justify-between">
                        {options.map((option) => (
                            <label
                                key={option}
                                className={`p-2 ml-1 gap-2 flex rounded lg:text-16 transition-all duration-150 ${
                                    formData.checkedItem === option
                                        ? 'bg-primary text-deep rounded-lg'
                                        : ''
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
                            </label>
                        ))}
                    </div>
                    <label
                        className={`p-2 gap-2 flex text-14 text-secondary rounded transition-all duration-150`}
                    >
                        <input
                            type="checkbox"
                            required
                            onChange={handleChange}
                        />{' '}
                        I accept the Terms
                    </label>
                </div>
                <Button text="Надіслати заявку" color="blue" type="submit" />
            </form>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default Form;
