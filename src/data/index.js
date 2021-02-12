import { HomeIcon, MonitorIcon } from '../assets/icons/icons'


const characteristicsArr = [
        { text: "Стандарт" },
        { text: "Optimal" },
        { text: "Max" },
]
const appearanceArr = [
        { text: "Длинные" },
        { text: "Крылатые" },
        { text: "Зеленые" },
        { text: "Нет" },
]

export const appearance = [
        { text: "Прическа", appearanceArr },
        { text: "Брови", appearanceArr },
        { text: "Борода", appearanceArr },
        { text: "Дефекты кожи", appearanceArr },
        { text: "Старение кожи", appearanceArr },
        { text: "Тип кожи", appearanceArr },
        { text: "Родинки и Веснушки", appearanceArr },
        { text: "Повреждения кожи", appearanceArr },
        { text: "Цвет глаз", appearanceArr },
]

export const characteristics = [
        { text: "Лоб", characteristicsArr },
        { text: "Глаза", characteristicsArr },
        { text: "Нос", characteristicsArr },
        { text: "Проф. носа", characteristicsArr },
        { text: "Кончик носа", characteristicsArr },
        { text: "Скулы", characteristicsArr },
        { text: "Щёки", characteristicsArr },
        { text: "Губы", characteristicsArr },
        { text: "Челюсть", characteristicsArr },
        { text: "Проф. подбородка", characteristicsArr },
        { text: "Форма подбородка", characteristicsArr },
]



export const ages = Array.from(new Array(100).keys()).map(e => ({ 'text': e }))
export const names = [
        { text: "Steven" },
        { text: "Грейси" },
        { text: "Anton" },
        { text: "Andrey" },
        { text: "Ivan" },
        { text: "Bob" },
        { text: "John" },
        { text: "Андриан" },

]

export const nations = [
        { text: "Русский" },
        { text: "Американец" },

]

const clothesArr = [
        { text: "Отсутствует" },
        { text: "Черная футболка" },
        { text: "Синие джинсы" }
]
export const clothes = [
        { text: "Головной убор", clothesArr },
        { text: "Верхняя одежда", clothesArr },
        { text: "Нижняя одежда", clothesArr },
        { text: "Обувь", clothesArr }
]

export const informItems = [
        { id: 0, text: "ИНФОРМАЦИЯ" },
        { id: 1, text: "ХАРАКТЕРИСТИКИ" },
        { id: 2, text: "ВНЕШНИЙ ВИД" },
        { id: 3, text: "ОДЕЖДА" }
]
export const bankItems = [
        { id: 0, text: "УПРАВЛЕНИЕ СЧЕТОМ" },
        { id: 1, text: "ОПЛАТА ИМУЩЕСТВА" },
        { id: 2, text: "ПЕРЕВЕСТИ НА СЧЕТ " }
]


export const prices = [
        { id: 0, text: '1 000' },
        { id: 1, text: '5 000' },
        { id: 2, text: '10 000' },
        { id: 3, text: '50 000' },
]
export const dates = [
        { id: 0, text: '1 день' },
        { id: 1, text: '3 дня' },
        { id: 2, text: '7 дней' },
        { id: 3, text: '14 дней' },
]
export const listOfProperty = [
        { id: 0, icon: <HomeIcon />, text: "Дом", number: "№456", term: "30 д." },
        { id: 1, icon: <HomeIcon />, text: "Дом", number: "№429", term: "1 д." },
        { id: 2, icon: <HomeIcon />, text: "Дом", number: "№413", term: "10 д." },
        { id: 3, icon: <HomeIcon />, text: "Дом", number: "№326", term: "20 д." },

]

export const listOfBusiness = [
        { id: 0, icon: <MonitorIcon />, text: "Магазин", number: "№46", term: "30 д." },
        { id: 1, icon: <MonitorIcon />, text: "Кофейня", number: "№16", term: "10 д." },
]