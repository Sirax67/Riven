export interface Character {
    id: number;
    src: string;
    alt: string;
    describtion1: string;
    describtion2: string;
    gender: string;
    age: string;
    height: string;
    bodyType: string;
    hairColor: string;
    hairLengthAndType: string;
    eyeColor: string;
    specialFeatures: string;
}

export const characters: Character[] = [
    {
        id: 1, 
        src: '/images/characters/persons/Kozetta_new.png', 
        alt: 'Козетта',
        describtion1: `Девятнадцатилетняя девушка из глухой деревни, затерянной среди холмов и леса. 
        Она энергична, любопытна и обладает той особенной настойчивостью, которая помогает 
        выживать в суровых условиях.`,
        describtion2: `Пол - Женский
        Возраст - 19 лет
        Рост - 161 см
        Телосложение - Атлетическое
        Цвет волос - Пшеничные
        Длина и тип волос - Короткие, волнистые
        Цвет глаз - Серо-голубые
        Особые приметы - Родинка под глазом, веснушки, механическая левая рука`,
        gender: 'Женский',
        age: '19 лет',
        height: '165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures: 'Родинка под глазом, веснушки, механическая левая рука'
    },
    {
        id: 2, 
        src: '/images/characters/persons/Duh.png', 
        alt: '???',
        describtion1: `Белое бесформенное существо, появившееся из разбитого Сосуда. Неопытный, иногда неуклюжий, но искренне желающий помочь. Он учится вместе с Козеттой — потому что никто не научил его быть наставником.`,
        describtion2: `Пол - ???
        Возраст - ??? 
        Рост - 155 см
        Телосложение - Худощавое
        Цвет волос - Нет
        Длина и тип волос - Нет
        Цвет глаз - Нет
        Особые приметы - ???`,
        gender: '???',
        age: '??? лет',
        height: '155 см',
        bodyType: 'Худощавое',
        hairColor: 'Нет',
        hairLengthAndType: 'Нет',
        eyeColor: 'Нет',
        specialFeatures: '???'
    },
    {
        id: 3, 
        src: '/images/characters/persons/Base-img.svg', 
        alt: 'Рихард',
        describtion1: `
        Двадцатиоднолетний наследник герцога восточных земель. 
        Холоден, требователен и не прощает слабости — ни другим, ни себе. 
        За его спиной — нищета, грязь и годы борьбы за право называться 
        сыном собственного отца.
`,
        describtion2: `Пол - Мужской
        Возраст - 21 год
        Рост - 198 см
        Телосложение - Атлетическое
        Цвет волос - Черные
        Длина и тип волос - Короткие, прямые
        Цвет глаз - Зелёные
        Особые приметы - Шрам на губе`,
        gender: 'Женский',
        age: '21 год',
        height: '198 см',
        bodyType: 'Атлетическое',
        hairColor: 'Черные',
        hairLengthAndType: 'Короткие, прямые',
        eyeColor: 'Зелёные',
        specialFeatures: 'Шрам на губе'
    },
    {
        id: 4, 
        src: '/images/characters/persons/Base-img.svg', 
        alt: 'Ханис',
        describtion1: `Королева, которую народ прозвал тираншей. Жестокая на поле боя и беспощадная к врагам, но за её глазами скрывается женщина, потерявшая брата и так и не нашедшая покоя даже после мести.`,
        describtion2: `Пол - Женский
        Возраст - 27 лет
        Рост - 195 см
        Телосложение - Атлетическое
        Цвет волос - Серебристые
        Длина и тип волос - Длинные, прямые
        Цвет глаз - Голубые
        Особые приметы - Шрам на ключице, золотистое свечение в глазах`,
        gender: 'Женский',
        age: '27 лет',
        height: '195 см',
        bodyType: 'Атлетическое',
        hairColor: 'Серебристые',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Голубые',
        specialFeatures: ' Шрам на ключице, золотистое свечение в глазах'
    },
];

// Хелпер функции для работы с данными
export function getAllCharacters() {
    return characters;
}

export function getCharacterById(id: number) {
    return characters.find(character => character.id === id);
}

export function getCharacterByIndex(index: number) {
    return characters[index];
}