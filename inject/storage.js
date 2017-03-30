import Promise from 'bluebird';


//store value/object, if object stringify
export function set(key, object) {
    return new Promise(function(resolve, reject) {
        if (object === undefined) {
            reject(new Error('storage item value required'));
        } else {
            let value = getJSON(object);
            try {
                localStorage.setItem(key, value);
                resolve();
            } catch (e) {
                reject(e);
            }
        }
    });
}

//get value/object, if json then parse
export function get(key) {
    return new Promise(function(resolve, reject) {
        try {
            let value = localStorage.getItem(key);
            let object = getObject(value);
            resolve(object);
        } catch (e) {
            reject(e);
        }
    });
}

export function remove(key) {
    return new Promise(function(resolve, reject) {
        try {
            localStorage.removeItem(key);
            resolve();
        } catch (e) {
            reject(e);
        }
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
