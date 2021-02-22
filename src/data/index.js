import { MonitorIcon, HomeIcon, CircleDownIcon, CircleUpIcon, QuestionIcon } from '../assets/icons/icons'


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
export const adminItems = [
        { id: 0, text: "АВТОРИЗАЦИЯ" },
        { id: 1, text: "ПАНЕЛЬ АДМИНИСТРИРОВАНИЯ" },
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

export const tabs = [
        { id: 0, text: "Пополнить счёт", icon: <CircleUpIcon style={{ marginRight: 15 }} /> },
        { id: 1, text: "Снять со счёта", icon: <CircleDownIcon style={{ marginRight: 15 }} /> },
        { id: 2, text: "Оплата недвижимости", icon: <HomeIcon style={{ marginRight: 15 }} /> },
        { id: 3, text: "Оплата бизнеса", icon: <MonitorIcon style={{ marginRight: 15 }} /> },
        { id: 4, text: "Перевести на счёт" }

]
export const tabsAdmin = [
        { id: 0, text: "Авторизация", icon: <CircleUpIcon style={{ marginRight: 15 }} /> },
        { id: 1, text: "Выход из админки", icon: <CircleDownIcon style={{ marginRight: 15 }} /> },
        { id: 2, text: "Ответ на вопросы", icon: <QuestionIcon style={{ marginRight: 15 }} /> },
        { id: 3, text: "Список игроков", icon: <MonitorIcon style={{ marginRight: 15 }} /> },
        { id: 4, text: "Список администрации", icon: <MonitorIcon style={{ marginRight: 15 }} /> },
        { id: 5, text: "Список лидеров организаций", icon: <MonitorIcon style={{ marginRight: 15 }} /> },
]
export const inputTexts = [
        { id: 0, text: "Пополнить счёт в размере ", view: 0 },
        { id: 1, text: "Снять сумму в размере ", view: 0 },
        { id: 2, text: "Оплатить налог на ", view: 1 },
        { id: 3, text: "Оплатить налог на ", view: 1 },
        { id: 4, text: "Перевести на счёт ", view: 2 },
]
export const btnTexts = [
        { id: 0, text: "Пополнить счёт" },
        { id: 1, text: "Снять со счёта" },
        { id: 2, text: "Оплатить недвижимость " },
        { id: 3, text: "Оплатить бизнес" },
        { id: 4, text: "Перевести на счёт" }
]

export const listOfQuestions = [
        { id: 0, name: "Steve Oven", date: "80 cek", subtitle: "<1T8X>[500]" },
        { id: 1, name: "Anton Art", date: "50 cek", subtitle: "<1T8X>[500]" },
        { id: 2, name: "Vasia Val", date: "10 cek", subtitle: "<1T8X>[500]" },
        { id: 3, name: "John None", date: "10 cek", subtitle: "<1T8X>[500]" }
]



export const totalInform = {
        headline: "Общая информация",
        arrElem: [
                { id: 0, headline: "1 LVL", text: "УРОВЕНЬ" },
                { id: 1, headline: "1 из 3", text: "ОПЫТ(EXP)" },
                { id: 2, headline: "МУЖСКОЙ ", text: "ПОЛ" },
                { id: 3, headline: "НЕ ЖЕНАТ", text: "СЕМЕЙНОЕ ПОЛОЖЕНИЕ" },
                { id: 4, headline: "ДОМ №336", text: "ИМУЩЕСТВО" },
                { id: 5, headline: "LOS SANTOS POLICE DEPARTMENT", text: "ОРГАНИЗАЦИЯ" },
                { id: 6, headline: "CHIEF OF POLICE(19)", text: "ДОЛЖНОСТЬ" },
                { id: 7, headline: "PATROL DIVISION", text: "ПОДРАЗДЕЛЕНИЕ" },
                { id: 8, headline: "ОТСУТСТВУЕТ", text: "РАБОТА" },
                { id: 9, headline: "ТЮНИНГ-ЦЕНТР №3", text: "БИЗНЕС" },
        ]
}
export const adminInform = {
        headline: "Статистика по репорту",
        arrElem: [
                { id: 0, headline: "LSPD", text: "CHIEF OF POLICE(19)" },
                { id: 1, headline: "ОРГАНИЗАЦИЯ", text: "ДОЛЖНОСТЬ" },
        ]
}
export const statisticsInform = {
        headline: "Статистика по наказаниям",
        arrElem: [
                { id: 0, headline: "100", text: "БЛОКИРОВОК ВСЕГО" },
                { id: 1, headline: "20", text: "БЛОКИРОВОК ВСЕГО" },
                { id: 2, headline: "100", text: "ПРЕДУПРЕЖДЕНИЙ ВСЕГО" },
                { id: 3, headline: "40", text: "ПРЕДУПРЕЖДЕНИЙ ЗА СЕГОДНЯ" },
        ]
}



export const commandData =

        [
                { id: 0, headline: "EXTRADITE EAT:" },
                { id: 1, headline: "EXTRADITE HP:" },
                { id: 2, headline: "EXTRADITE WATER" },
                { id: 3, headline: "EXTRADITE WATER" },
                { id: 4, headline: "EXTRADITE WATER" },
                { id: 5, headline: "EXTRADITE WATER:" },
                { id: 6, headline: "EXTRADITE WATER" },
                { id: 7, headline: "EXTRADITE WATER" },
                { id: 8, headline: "EXTRADITE WATER" },
                { id: 9, headline: "EXTRADITE WATER" },
        ]

