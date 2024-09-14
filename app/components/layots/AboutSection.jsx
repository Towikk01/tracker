import React from 'react';
import Title from '../elements/Title';
import BenefitBlock from '../elements/BenefitBlock';
const data = [
    {
        title: 'Онлайн стеження',
        desciption:
            'Дозволяє відстежувати переміщення автомобілів в режимі реального часу, а також відображає стан автомобіля.',
    },
    {
        title: 'Історія пересувань',
        desciption:
            'Дає можливість переглядати історію пересувань, перевищень швидкості та станів датчиків.',
    },
    {
        title: 'Журнал технічного обслуговування',
        desciption:
            'Допоміжний елемент для ведення записів з технічного обслуговування, витрат на обслуговування та інших подій.',
    },
    {
        title: 'Нагадування',
        desciption:
            'Повідомлення користуача про настання встановленої дати або пройдену відстань з дати встановленої в записі журналу.',
    },
    {
        title: 'Геозони',
        desciption:
            'Ви можете визначити на карті до 20 геозон для яких буде створюватись історія по в’їзду та виїзду для кожного автомобіля вашого парку.',
    },
    {
        title: 'Оператори',
        desciption:
            'Надається можливість обмеженого доступу до перегляду розташування та стану автомобілів користувача.',
    },
];

const AboutSection = () => {
    return (
        <section className="flex flex-col  px-4 gap-16">
            <Title>Можливості сервісу</Title>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5">
                {data.map((item, idx) => (
                    <BenefitBlock
                        key={idx}
                        title={item.title}
                        description={item.desciption}
                    />
                ))}
            </div>
        </section>
    );
};

export default AboutSection;
