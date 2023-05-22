/*
    loads a dependency from an object repository
    @param objectRepository - the dependency that needs to be loaded
    @param propertyName - the name of the dependency that needs to be loaded
    @return dependency || TypeError 
*/


function requireOption(objectRepository, propertyName) {
    if (objectRepository && objectRepository[propertyName]) {
        return objectRepository[propertyName];
    }
    throw new TypeError(`${propertyName} required`);
}

module.exports = requireOption;