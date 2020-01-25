var content = document.getElementById('content')
var page = 1;

var getPeople = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://swapi.co/api/people/?page=" + page ,true)
    xhr.responseType = 'json';
    xhr.onload = function(){
        let status = xhr.status;
        if (status == 200) {
            for (var hero of xhr.response.results){
                content.innerHTML += '<p>' + hero.name + '<br> </p>';
            }
        }
    };
    xhr.send();
}

getPeople();

function onloading(){
    ++page;
    getPeople();
}