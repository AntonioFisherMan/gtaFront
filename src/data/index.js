
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