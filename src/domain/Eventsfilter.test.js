import { isVisible } from './Eventsfilter';

const event = {
    "Address": "ул. Юровская, д. 97",
    "Class": [
    ],
    "Classes": "Классы: Не указаны",
    "DateEnd": 1686787200000,
    "DateStart": 1686787200000,
    "Description": "-",
    "Description2": "Проведение педагогической диагностики для установления готовности к освоению программы ускоренного обучения в рамках проекта «Московская началка». Дошкольные группы. Внешняя диагностика, резервный день",
    "EndTime": "10.00",
    "Mainman": "Покровская Наталья Александровна",
    "Parallel": [
        "1"
    ],
    "Parallels": "Параллели: 0",
    "Period": "c 9.20 2023-06-15 по 10.00 2023-06-15",
    "Title": "Проведение педагогической диагностики для установления готовности к освоению программы ускоренного обучения в рамках проекта «Московская началка». Дошкольные группы. Внешняя диагностика",
    "Visibility": [
        "Сотрудники"
    ],
    "fullSDate": 1686820800000,
    "hidden": false,
    "id": 389,
    "showToKids": false
}

const filter = {
    "MyClassParallel": "", "className": "", "filterDateE": 1711357200000, "filterDateS": 1685059200000, "myClassToggle": false, "parallels": {
        "1": true,
        "10": true, "11": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "9": true
    }, "period": "Месяц", "refreshItems": true
}

const access = 'Учитель'
const showHidden = false


test('has 1 child', () => {
    expect(isVisible(event, filter, access, showHidden)).toBe(true);
}); 