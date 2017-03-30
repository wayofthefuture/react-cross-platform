//user store interface, hard modeled
//once the user properties are defined, no subsequent property definitions allowed
import * as storage from '../inject/storage';
import lodash from 'lodash';
import Promise from 'bluebird';

let expireCallback, rcpKey = 'rcp_user';


export function setExpire(callback) {
    if (typeof callback !== 'function') {
        throw new Error('expire callback must be a function');
    } else {
        expireCallback = callback;
    }
}

export function create(user) {
    return new Promise(function (resolve, reject) {
        if (!expireCallback) {
            reject(new Error('userstore expire callback has not been set'));
        }
        else if (!lodash.isObject(user)) {
            reject(new Error('userstore user must be an object'));
        }
        else {
            return storage.set(rcpKey, user)
                .then(() => {resolve();})
                .catch(error => reject(error));
        }
    });
}

//get based on key, if no key supplied, get entire user object
export function get(key) {
    return new Promise(function (resolve, reject) {
        if (!expireCallback) {
            reject(new Error('userstore expire callback has not been set'));
        }
        else if (key !== undefined && typeof key !== 'string') {
            reject(new Error('userstore item key must be a string'));
        }
        else {
            return storage.get(rcpKey)
                .then((user) => {
                if (!user) { return expireCallback() }

                if (key === undefined) {
                    resolve(user);
                } else if (user[key] !== undefined) {
                    resolve(user[key]);
                } else {
                    reject(new Error('userstore item for specified key does not exist'));
                }
            }).catch(error => reject(error));
        }
    });
}

//allow update of key with value/object, do not allow creating of new object properties
export function update(key, object) {
    return new Promise(function (resolve, reject) {
        if (!expireCallback) {
            reject(new Error('userstore expire callback has not been set'));
        }
        else if (typeof key !== 'string') {
            reject(new Error('userstore item key must be a string and value/object is required'));
        }
        else if (object === undefined) {
            reject(new Error('userstore item update value/object is required'));
        }
        else {
            return storage.get(rcpKey)
                .then((user) => {
                if (!user) { return expireCallback() }

                if (user[key] === undefined) {
                    reject(new Error('userstore item key does not exist'));
                } else {
                    user[key] = object;

                    return storage.set(rcpKey, user)
                        .then(() => {resolve();})
                        .catch(error => reject(error));
                }
            }).catch(error => reject(error));
        }
    });
}

export function clear() {
    return new Promise(function (resolve, reject) {
        return storage.remove(rcpKey)
            .then(() => {resolve();})
            .catch(error => reject(error));
    });
}
