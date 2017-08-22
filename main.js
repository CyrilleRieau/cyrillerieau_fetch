var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetch(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status)
            }
        };
        xhr.onerror = function(error) {
            reject(error);
        }
        xhr.send();
    });
};
module.exports = fetch;


/*function modif() {
    var http = require('http');

    var options = {
        host: 'www.dog.ceo',
        path: '/api/breeds/list/all',
    };

    callback = function(response) {
        var str = ''
        response.on('data', function(chunk) {
            str += chunk;
        });

        response.on('end', function() {
            console.log(str);
        });
    }

    var req = http.request(options, callback);
    req.end();
}

exports.modif = modif;*/