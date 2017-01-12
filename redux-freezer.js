import {forOwn, isElement, isFunction, isObject} from 'lodash';

export const deepFreeze = (object) => {
    Object.freeze(object);

    forOwn(object, (value, key) => {
        if (value && isObject(value) && !isElement(value) && !Object.isFrozen(value)) {
            deepFreeze(value);
        }
    });

    return object;
};

const freezer = store => next => action => {
    let result = next(action);

    return deepFreeze(result);
};

export default freezer;
