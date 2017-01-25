import {forOwn, isElement, isFunction, isObject} from 'lodash';

export const deepFreeze = (object) => {
    Object.freeze(object);

    forOwn(object, (value, key) => {
        if (value && (isObject(value) || isFunction(value)) &&
            !isElement(value) &&
            !Object.isFrozen(value)) {

            deepFreeze(value);
        }
    });

    return object;
};

const freezer = store => next => action => {
    const result = next(action);

    deepFreeze(store.getState());

    return result;
};

export default freezer;
