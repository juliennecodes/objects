import {createRowData, fry} from "../../helpers";

const assign = createRowData(
    'assign',
    'Object.assign(target, ...sources)',
    {
        method: 'assign',
        exampleArguments: [`{}`, fry]
    },
    [
        `The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.`
    ],
    [
        `targetObject gets assigned properties from sourceObject(s)`,
        `empty object gets properties from fry`
    ]
);

const create = createRowData(
    'create',
    'Object.create(proto, [propertiesObject])',
    {
        method: 'create',
        exampleArguments: [`{isHuman: true}`, `{name: {value: 'Fry'}}`]
    },
    [
        `The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.`
    ],
    [
        `you can create new objects by using object literal {}`,
        `you can also use the object constructor Object()`,
        `those don't let you specify the prototype of the created object though`,
        `Object.create lets you specify the prototype`,
        `then you have to define the properties of the object being created`,
        `you use property descriptors`,
        `other ones aside from value are configurable, enumerable, writable`
    ]
);

const fromEntries = createRowData(
    'from-entries',
    'Object.fromEntries(iterable)',
    {
        method: 'fromEntries',
        exampleArguments: [`[['name', 'Fry'], ['age', 25]]`]
    },
    [
        `The Object.fromEntries() method transforms a list of key-value pairs into an object.`
    ],
    [
        `given an array containing arrays of key value pairs`,
        `create an object from that`
    ]
);

export const creatingObjects = {
    heading: 'Creating Objects',
    tableContents: [
        create,
        assign,
        fromEntries
    ]
}