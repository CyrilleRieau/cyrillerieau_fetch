module.exports = function fetch(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
        xhr.onerror = function(error) {
            reject(error);
        }
        xhr.send();
    });
}
fetch("https://dog.ceo/api/breeds/list/all").then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.error(error);
});