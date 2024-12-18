import {bender, createRowData, fry, leela} from "../../helpers";

const groupBy = createRowData(
    'groupBy',
    'Object.groupBy(items, callbackFn)',
    {method: 'groupBy', exampleArguments: [`[${fry}, ${leela}, ${bender}]`, (character) => character.isHuman]},
    [
        `The Object.groupBy() static method groups the elements of a given iterable according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group.`
    ],
    [
        `give groupBy something iterable`,
        `the callback will process each element in the iterable`,
        `callback should return a value that can be turned into a property key`,
        `the property key will indicate which group the element will belong in`,
        `each key will have an array that contains all the elements for which the callback returned the same value`,
        `so if objectA returned the same value as objectB, they will be in the same group`,
        `\n`,
        `in the example, the callback will either return true or false`,
        `true or false are used as keys`,
        `fry returned true, leela returned true, bender returned false`,
        `therefore, true key will have an array that contains fry and leela`,
        `false key will have an array containing bender`
    ]
);

const is = createRowData(
    'is',
    'Object.is(value1, value2)',
    {
        method: 'is',
        exampleArguments: [`25`, `25`]
    },
    [
        `The Object.is() method determines whether two values are the same value.`
    ],
    []
);

const hasOwn = createRowData(
    'has-own',
    'Object.hasOwn(object, prop)',
    {
        method: 'hasOwn',
        exampleArguments: [fry, `'name'`]
    },
    [
        `The Object.hasOwn() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).`
    ],
    []
);

export const utilityFunctions = {
    heading: 'Utility Functions',
    tableContents: [
        groupBy,
        is,
        hasOwn
    ]
}