import Promise from 'bluebird';
import {AsyncStorage} from 'react-native';


//store value/object, if object stringify
export function set(key, object) {
    return new Promise(function(resolve, reject) {
        if (object === undefined) {
            reject(new Error('storage item value required'));
        } else {
            let value = getJSON(object);

            AsyncStorage.setItem(key, value)
                .then(result => { resolve() })
                .catch(error => { reject(error) });
        }
    });
}

//get value/object, if json then parse
export function get(key) {
    return new Promise(function(resolve, reject) {
        AsyncStorage.getItem(key)
            .then(value => {
                let object = getObject(value);
                resolve(object);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function remove(key) {
    return new Promise(function(resolve, reject) {
        AsyncStorage.removeItem(key).then(resolve).catch(reject);
    });
}


export function getObject(value) {
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
}
export function getJSON(object) {
    try {
        return JSON.stringify(object);
    } catch (e) {
        return object;
    }
}
