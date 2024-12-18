import {createRowData} from "../../helpers";

const defineProperties = createRowData(
    'define-properties',
    'Object.defineProperties(object, props)',
    {
        method: 'defineProperties',
        exampleArguments: [`{}`, `{name: {value: 'Fry'}, age: {value: 25}}`]
    },
    [
        `The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.`
    ],
    [
        `Object.defineProperty() allows a precise addition to or modification of a property on an object. Normal property addition through assignment creates properties which show up during property enumeration (for...in, Object.keys(), etc.), whose values may be changed and which may be deleted`,
        `This method allows these extra details to be changed from their defaults. By default, properties added using Object.defineProperty() are not writable, not enumerable, and not configurable.`
    ]
);

const defineProperty = createRowData(
    'define-property',
    'Object.defineProperty(object, prop, descriptor)',
    {
        method: 'defineProperty',
        exampleArguments: [`{}`, `'name'`, `{value: 'Fry'}`]
    },
    [
        `The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.`
    ],
    [
        `similar to defineProperties but singular`
    ]
);

export const setProperties = {
    heading: 'Set Properties',
    tableContents: [
        defineProperty,
        defineProperties
    ]
}