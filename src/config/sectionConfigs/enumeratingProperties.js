import {createRowData, fry} from "../../helpers";

const entries = createRowData(
    'entries',
    'Object.entries(object)',
    {
        method: 'entries',
        exampleArguments: [fry]
    },
    [
        `The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.`
    ],
    [
        `iterates over the object's properties, name, age, isHuman`,
        `returns this structure [[key, value], [key, value], [key, value]]`,
        `this returns`,
        `[`,
        `   ['name', 'Fry']`,
        `   ['age', 25]`,
        `   ['isHuman', true]`,
        `]`,
    ]
);

const getOwnPropertyNames = createRowData(
    'get-own-property-names',
    'Object.getOwnPropertyNames(object)',
    {
        method: 'getOwnPropertyNames',
        exampleArguments: [fry]
    },
    [
        `The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.`
    ],
    [
        `returns an array of property names`,
        `['name', 'age', 'isHuman']`,
        `returns all properties even if the properties are not enumerable`
    ]
);

const getOwnPropertySymbols = createRowData(
    'get-own-property-symbols',
    'Object.getOwnPropertySymbols(object)',
    {
        method: 'getOwnPropertySymbols',
        exampleArguments: [fry]
    },
    [
        `The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.`
    ],
    []
);

const keys = createRowData(
    'keys',
    'Object.keys(object)',
    {
        method: 'keys',
        exampleArguments: [fry]
    },
    [
        `The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.`
    ],
    [
        `returns an array that contains the object's properties`,
        `['name', 'age', 'isHuman']`,
        `only returns enumerable properties`,
        `if you define some properties as not enumerable, it won't be returned`
    ]
);

const values = createRowData(
    'values',
    'Object.values(object)',
    {
        method: 'values',
        exampleArguments: [fry]
    },
    [
        `The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.`
    ],
    [
        `returns an array containing the values of the object's properties`,
        `['Fry', 25, true]`,
        `only applies to enumerable properties`
    ]
);
export const enumeratingProperties = {
    heading: 'Enumerating Properties',
    tableContents: [
        keys,
        values,
        entries,
        getOwnPropertyNames,
        getOwnPropertySymbols
    ]
}