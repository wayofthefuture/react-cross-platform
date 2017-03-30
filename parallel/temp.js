
var coroutine2 = function(fn) {
    return Promise.coroutine(fn, {
        yieldHandler: function(value) {
            if (typeof value === 'number') {
                return Bluebird.delay(value);
            }
        }
    });
};

//import Promise from 'bluebird';


