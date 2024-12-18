import {createRowData, fry} from "../../helpers";

const freeze = createRowData(
    'freeze',
    'Object.freeze(object)',
    {
        method: 'freeze',
        exampleArguments: [fry]
    },
    [
        `The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.`
    ],
    []
);

const isExtensible = createRowData(
    'is-extensible',
    'Object.isExtensible(object)',
    {
        method: 'isExtensible',
        exampleArguments: [fry]
    },
    [
        `The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).`
    ],
    []
);

const isFrozen = createRowData(
    'is-frozen',
    'Object.isFrozen(object)',
    {
        method: 'isFrozen',
        exampleArguments: [fry]
    },
    [
        `The Object.isFrozen() method determines if an object is frozen.`
    ],
    [
        `an object that goes through Object.freeze(object) is frozen`
    ]
);

const isSealed = createRowData(
    'is-sealed',
    'Object.isSealed(object)',
    {
        method: 'isSealed',
        exampleArguments: [fry]
    },
    [
        `The Object.isSealed() method determines if an object is sealed.`
    ],
    [
        `an object that goes through Object.seal(object) is sealed`
    ]
);

const preventExtensions = createRowData(
    'prevent-extensions',
    'Object.preventExtensions(object)',
    {
        method: 'preventExtensions',
        exampleArguments: [fry]
    },
    [
        `The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).`
    ],
    []
);

const seal = createRowData(
    'seal',
    'Object.seal(object)',
    {
        method: 'seal',
        exampleArguments: [fry]
    },
    [
        `The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.`
    ],
    []
);

export const objectIntegrity = {
    heading: 'Object Integrity',
    tableContents: [
        freeze,
        seal,
        preventExtensions,
        isFrozen,
        isSealed,
        isExtensible
    ]
}