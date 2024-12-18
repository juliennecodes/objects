import {createRowData, fry} from "../../helpers";

const getPrototypeOf = createRowData(
    'get-prototype-of',
    'Object.getPrototypeOf(object)',
    {
        method: 'getPrototypeOf',
        exampleArguments: [fry]
    },
    [
        `The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.`
    ],
    []
);

const setPrototypeOf = createRowData(
    'set-prototype-of',
    'Object.setPrototypeOf(object, prototype)',
    {
        method: 'setPrototypeOf',
        exampleArguments: [fry, `{}`]
    },
    [
        `The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.`
    ],
    []
);



export const prototypeAndInheritance = {
    heading: 'Prototype and Inheritance',
    tableContents: [
        getPrototypeOf,
        setPrototypeOf,
    ]
}