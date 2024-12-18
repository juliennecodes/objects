import {creatingObjects} from "./sectionConfigs/creatingObjects";
import {propertyDescriptors} from "./sectionConfigs/propertyDescriptors";
import {enumeratingProperties} from "./sectionConfigs/enumeratingProperties";
import {objectIntegrity} from "./sectionConfigs/objectIntegrity";
import {prototypeAndInheritance} from "./sectionConfigs/prototypeAndInheritance";
import {setProperties} from "./sectionConfigs/setProperties";
import {utilityFunctions} from "./sectionConfigs/utilityFunctions";

export const config = {
    title: 'Object Methods',
    categories: [
        enumeratingProperties,
        utilityFunctions,
        creatingObjects,
        objectIntegrity,
        setProperties,
        prototypeAndInheritance,
        propertyDescriptors
    ]
}