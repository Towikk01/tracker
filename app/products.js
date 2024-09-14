import * as AT4 from './public/AT4/index.js';
import * as WeTrack from './public/WeTrack/index.js';
import * as WeTrack2 from './public/WeTrack2/index.js';
export const productData = {
    'Concox AT4': {
        title: 'Автономний портативний GPS-трекер AT4 Concox',
        description:
            'Використовуючи GPS і позиціонування LBS, трекер AT4 дає докладні звіти і точно повідомляє, де знаходиться автомобіль, куди він прямує і як швидко він рухається.',
        images: [AT4.first, AT4.second, AT4.third, AT4.last],
        prices: {
            old: 4200,
            new: 3600,
        },
        modalWindow: {
            descriptionFirst:
                'Автономний портативний GPS-трекер AT4 Concox має розширені функції, міцну конструкцію і лідируюче в галузі час автономної роботи. AT4 - нове сучасне GPS засіб стеження за автотранспортними засобами.',
            descriptionSecond:
                'Використовуючи GPS і позиціонування LBS, трекер AT4 дає докладні звіти і точно повідомляє, де знаходиться автомобіль, куди він прямує і як швидко він рухається.',
            tags: [
                'Батарея 10000 мАг і водонепроникністю IPX5',
                'Особливості GPS трекера AT4: GPS + LBS + WIFI',
                'Інтелектуальне управління живленням',
                'Водонепроникний корпус для роботи в жорстких умовах',
                'Світлодіодний дисплей для перегляду стану батареї',
                'Сильна магнітна кришка для гнучкої установки',
                'Кришка демонтажу сигналізації',
                'Аварійні сигнали при зміні SIM-карти та екстреного вимкнення/увімкнення',
                'Повний контроль над окремими транспортними засобами або парками',
            ],
        },
    },
    'Concox WeTrack Lite': {
        title: 'Мініатюрний GPS-трекер Concox WeTrack Lite',
        description:
            'Дуже простий в монтажі GPS / GSM пристрій стеження за транспортними засобами. Підходить для відкритої та прихованої установки на автомобіль.',
        images: [WeTrack.first, WeTrack.second, WeTrack.third, WeTrack.last],
        prices: {
            old: 2000,
            new: 1600,
        },
        modalWindow: {
            descriptionFirst:
                'GSM: 900/1800 GPRS: Class12, TCP / IP Модуль GPS: SiRF Star III / LP Кількість каналів: 20 каналів Чутливість: -159dBm (трекінг) Час визначення координат: Гарячий старт: не більше 1сек Холодний старт: не більше 32сек Вбудовані антени: GSM антена, високочутлива, всенаправленная GPS антена (огляд 360-градусів) Індикація (три світлодіода): GPS-синій, GSM-зелений, Power-червоний Вхідна напруга живлення: 7 ~ 28VDC Розміри: 73.8 x 25.9 x 12.2 Вага: 26g Робоча температура: -25 ℃ до +70 ℃ Вологість: від 5% до 95% без конденсації',
            tags: [
                'Передача GPS даних по SMS і GPRS',
                'Вбудована Li-Pol батарея',
                'Вбудований датчик удару і переміщення',
                'Широкий діапазон вхідної напруги (від 7 до 28 V DC)',
                'Зміна режимів роботи пристрою через SMS',
                'Пароль користувача надається до налаштувань приладу',
                'Можлива як відкрита, так і прихована установка на автомобіль',
                'Індикація режимів роботи',
                'Маленький, тонкий, легкий в установці',
            ],
        },
    },
    'Concox WeTrack 2': {
        title: 'Компактний GPS-трекер Concox WeTrack 2',
        description:
            'Дуже простий в монтажі GPS / GSM пристрій стеження за транспортними засобами. Відрізняється невисокою ціною при малих габаритах і стабільній роботі. Підходить для відкритої та прихованої установки на автомобіль.',
        images: [
            WeTrack2.first,
            WeTrack2.second,
            WeTrack2.third,
            WeTrack2.last,
        ],
        prices: {
            old: 2600,
            new: 2100,
        },
        modalWindow: {
            descriptionFirst:
                'GSM: 900/1800 GPRS: Class12, TCP / IP Модуль GPS: SiRF Star III / LP Кількість каналів: 20 каналів Чутливість: -159dBm (трекінг) Час визначення координат: Гарячий старт: не більше 2сек Теплий старт: не більше 15 сек Холодний старт: не більше 38сек Вбудовані антени: GSM антена, високочутлива, всенаправленная GPS антена (огляд 360-градусів) Індикація (три світлодіода): GPS-синій, GSM-зелений, Power-червоний Вхідна напруга живлення: 7 ~ 28VDC Розміри: 90,0 x 45,0 x 12,0 мм Вага: 45g Робоча температура: -25 ℃ до +70 ℃ Вологість: від 5% до 95% без конденсації',
            tags: [
                'Передача GPS даних по SMS і GPRS',
                'Вбудована Li-Pol батарея',
                'Вбудований датчик удару і переміщення',
                'Можливість блокування двигуна (реле в комплекті)',
                'Широкий діапазон вхідної напруги (від 7 до 28 V DC)',
                'Пароль користувача надається до налаштувань приладу',
                'Зміна режимів роботи пристрою через SMS',
                'Індикація режимів роботи',
                'Маленький, тонкий, легкий в установці',
            ],
        },
    },
};
