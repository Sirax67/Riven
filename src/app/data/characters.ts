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
        Телосложение - Худощавое
        Цвет волос - Пепельно-русый
        Длина и тип волос - Длинные, волнистые
        Цвет глаз - Тёмно-карие
        Особые приметы - Маленькая родинка под левым глазом`,
        gender: 'Женский',
        age: '17 лет',
        height: '165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures: 'Родинка под глазом, веснушки, механическая левая рука'
    },
    {
        id: 2, 
        src: '/images/characters/persons/Kozetta_new.png', 
        alt: 'Козетта',
        describtion1: `Семнадцатилетняя девушка из глухой деревни, затерянной среди холмов и леса. 
        Она энергична, любопытна и обладает той особенной настойчивостью, которая помогает 
        выживать в суровых условиях.`,
        describtion2: `Пол - Женский
        Возраст - 17 лет
        Рост - 165 см
        Телосложение - Худощавое
        Цвет волос - Пепельно-русый
        Длина и тип волос - Длинные, волнистые
        Цвет глаз - Тёмно-карие
        Особые приметы - Маленькая родинка под левым глазом`,
        gender: 'Женский',
        age: '17 лет',
        height: '165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures: 'Родинка под глазом, веснушки, механическая правая рука'
    },
    {
        id: 3, 
        src: '/images/characters/persons/Kozetta_new.png', 
        alt: 'Козетта',
        describtion1: `Семнадцатилетняя девушка из глухой деревни, затерянной среди холмов и леса. 
        Она энергична, любопытна и обладает той особенной настойчивостью, которая помогает 
        выживать в суровых условиях.`,
        describtion2: `Пол - Женский
        Возраст - 17 лет
        Рост - 165 см
        Телосложение - Худощавое
        Цвет волос - Пепельно-русый
        Длина и тип волос - Длинные, волнистые
        Цвет глаз - Тёмно-карие
        Особые приметы - Маленькая родинка под левым глазом`,
        gender: 'Женский',
        age: '17 лет',
        height: '165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures: 'Родинка под глазом, веснушки, механическая правая рука'
    },
    {
        id: 4, 
        src: '/images/characters/persons/Kozetta_new.png', 
        alt: 'Козетта',
        describtion1: `Семнадцатилетняя девушка из глухой деревни, затерянной среди холмов и леса. 
        Она энергична, любопытна и обладает той особенной настойчивостью, которая помогает 
        выживать в суровых условиях.`,
        describtion2: `Пол - Женский
        Возраст - 17 лет
        Рост - 165 см
        Телосложение - Худощавое
        Цвет волос - Пепельно-русый
        Длина и тип волос - Длинные, волнистые
        Цвет глаз - Тёмно-карие
        Особые приметы - Маленькая родинка под левым глазом`,
        gender: 'Женский',
        age: '17 лет',
        height: '165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures: 'Родинка под глазом, веснушки, механическая правая рука'
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