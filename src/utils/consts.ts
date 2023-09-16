import { BarColor } from "@/components/elements/Bar/Bar"

export const menu: {icon: string, text: string}[] = [
    {
        icon: './icons/assesment.svg',
        text: 'Итоги'
    },
    {
        icon: './icons/orders.svg',
        text: 'Заказы'
    },
    {
        icon: './icons/msg.svg',
        text: 'Сообщения'
    },
    {
        icon: './icons/calls.svg',
        text: 'Звонки'
    },
    {
        icon: './icons/people.svg',
        text: 'Контрагенты'
    },
    {
        icon: './icons/docs.svg',
        text: 'Документы'
    },
    {
        icon: './icons/workers.svg',
        text: 'Исполнители'
    },
    {
        icon: './icons/reports.svg',
        text: 'Отчеты'
    },
    {
        icon: './icons/knowledgeBase.svg',
        text: 'База знаний'
    },
    {
        icon: './icons/settings.svg',
        text: 'Настройки'
    }
]

export const callsAnalytics: {title: string, stats: string, color: BarColor}[] = [
    {
        title: 'Новые звонки',
        stats: '20 из 30 шт',
        color: BarColor.GREEN
    },
    {
        title: 'Качество разговоров',
        stats: '40%',
        color: BarColor.YELLOW
    },
    {
        title: 'Конверсия в заказ',
        stats: '67%',
        color: BarColor.RED
    }
]

export const callTypes = [
    'Все типы',
    'Входящие',
    'Исходящие'
]

export const filters = [
    callTypes,
    ['Все сотрудники'],
    ['Все звонки'],
    ['Все источники'],
    ['Все оценки'],
    ['Все ошибки'],
]

//MOCK DATA

export const phoneNumbers = [
    { 
        phone: '+7 (987) 567-17-12',
        name: '',
        company: ''
    },
    { 
        phone: '+7 (987) 566-12-18',
        name: '',
        company: ''
    },
    { 
        phone: '+7 (987) 567-17-12',
        name: 'Константиний Константинопольский ',
        company: 'ООО «Грузчиков Сервис Запад»'
    },
    { 
        phone: '+7 (987) 567-17-12',
        name: '',
        company: ''
    },
    { 
        phone: '+7 (987) 566-12-18',
        name: '',
        company: ''
    },
    { 
        phone: '+7 (987) 567-17-12',
        name: 'Алексей',
        company: ''
    },
    { 
        phone: '+7 (987) 567-17-12',
        name: '',
        company: ''
    },
    { 
        phone: '+7 (987) 566-12-18',
        name: '',
        company: ''
    },
] 

export const sources = [
    'Rabota.ru', 'Rabota.ru', '', '', '', 'Google', 'Yandex', '', '', '', 'Санкт-Петербург', 'Rabota.ru', '', '', 'Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво ', '', '', '',
] 

export const grades = [
    'Отлично', 'Отлично', 'Хорошо', 'Распознать', '', '', '', 'Плохо', 'Отлично', '', 
] 

export const avatars = ['/images/avatar1.png', '/images/avatar2.png', '/images/avatar3.png']