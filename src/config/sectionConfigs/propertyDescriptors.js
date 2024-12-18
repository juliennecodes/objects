import {createRowData, fry} from "../../helpers";

const getOwnPropertyDescriptor = createRowData(
    'get-own-property-descriptor',
    'Object.getOwnPropertyDescriptor(object, prop)',
    {
        method: 'getOwnPropertyDescriptor',
        exampleArguments: [fry, `'name'`]
    },
    [
        `The Object.getOwnPropertyDescriptor() method returns a property descriptor for a named property on an object.`
    ],
    [
        `gets the property descriptor for the specified property`,
        `here the function is getting property descriptors of name`,
        `returns`,
        `{ value: 'Fry', writable: true, enumerable: true, configurable: true}`
    ]
);

const getOwnPropertyDescriptors = createRowData(
    'get-own-property-descriptors',
    'Object.getOwnPropertyDescriptors(object)',
    {
        method: 'getOwnPropertyDescriptors',
        exampleArguments: [fry]
    },
    [
        `The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.`
    ],
    [
        `returns property descriptors for each property`,
        `{
    name: {
        value: 'Fry',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 25,
        writable: true,
        enumerable: true,
        configurable: true
    },
    isHuman: {
        value: true,
        writable: true,
        enumerable: true,
        configurable: true
    }
}`
    ]
);

export const propertyDescriptors = {
    heading: 'Property Descriptors',
    tableContents: [
        getOwnPropertyDescriptor,
        getOwnPropertyDescriptors
    ]
}

