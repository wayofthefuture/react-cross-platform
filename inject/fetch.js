import Promise from 'bluebird';

export default function(url, options) {
    return new Promise(function(resolve, reject) {
        $.ajax(url, options)
            .done((result) => {
                resolve(result);
            })
            .fail((xhr, error) => {
                reject(new Error(error || 'error is null'));
            });
    });
}
