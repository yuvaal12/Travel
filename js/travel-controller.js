import {locationPrevie} from './location-preview.js';
window.addEventListener('load', onInit)
var elCopyLoc = document.querySelector('.find-loc');
elCopyLoc.addEventListener('click',onFindLoc);

function onInit(){
    renderLocations()
}

function renderLocations() {
    const elTable = document.querySelector('table');    
    var locs = getLocations();
    locs.forEach(function (loc) {
        const locPreivew = new locationPrevie(loc.id,loc.info, onTodoClicked, onDeleteTodo)
        const elTable = locationPrevie.render();
        elTable.appendChild(elTable);
    });
    
}
function onFindLoc(){
    var adress = document.querySelector('.adress').value;
    alert(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress},+CA&key=AIzaSyDNaZfXPuRjFXlWD7R3gVeunJYjYHERdDg`)
}

