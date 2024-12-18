export const createRowData = (name, syntax, example, explanation, comment) => {
    return { name, syntax, example, explanation, comment};
}

export const copyContent = (content) => {
    navigator.clipboard.writeText(content)
}

export const fry = `{ name: 'Fry', age: 25, isHuman: true}`;

export const leela = `{ name: 'Leela', age: 25, isHuman: true }`;

export const bender = `{ name: 'Bender', age: null, isHuman: false}`;

export const fryLong = `{
    name: 'Fry',
    age: 25,
    isHuman: true,
    occupation: [
        'Executive Delivery Boy',
        'Soldier',
        'Emperor of Trisol'
    ],
    extraInfo: {
        hairColour: 'red',
        birthdate: 'August 14, 1974',
        identifiableFeatures: [
            'red jacket',
            'blue pants',
            'red hair'
        ],
        pets: null
    }
}`;

export const leelaLong = `{
    name: 'Leela',
    age: 25,
    isHuman: true,
    occupation: [
        'Captain of the Planet Express Ship',
        'Cryogenics councilor',
        'Superhero'
    ],
    extraInfo: {
        hairColour: 'purple',
        birthdate: 'July 29, 2975',
        identifiableFeatures: [
            'purple hair',
            'one eye',
            'big boots'
        ],
        pets: 'Nibbler'
    }
}`;

export const benderLong = `{
    name: 'Bender',
    age: 25,
    isHuman: false,
    occupation: [
        'Assistant Manager of Sales & Chef at Planet Express',
        'Pharaoh of Osiris IV'
    ],
    extraInfo: {
        hairColour: null,
        birthdate: null,
        identifiableFeatures: [
            'metal body',
            'cigar',
            'beer'
        ],
        pets: null
    }
}`;