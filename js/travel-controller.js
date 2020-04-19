import {locationPrevie as locationPreview} from './location-preview.js';
window.addEventListener('load', onInit)
var elCopyLoc = document.querySelector('.find-loc');
elCopyLoc.addEventListener('click',onFindLoc);
var elMyLoc = document.querySelector('.my-loc');
elMyLoc.addEventListener('click',onGoToMyloc);

function onInit(){
    renderLocations()
}

function renderLocations() {
    const elTable = document.querySelector('tbody'); 
    elTable.innerHTML = '';
    var locs = getLocations();
    console.log(locs);
    locs.forEach(function (loc) {
        
        const locPreview = new locationPreview(loc.id,loc.adress,loc.weather)
        const elRow = locPreview.render();
        elTable.appendChild(elRow);
    });
    
}
function onFindLoc(){
    var adress = document.querySelector('.adress').value;
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${adress},+CA&key=AIzaSyDNaZfXPuRjFXlWD7R3gVeunJYjYHERdDg`
    getLoc(getLngLnt,url);
    setTimeout(renderLocations,2000);
}

function onGoToMyloc(){
    getToMyLoc();
    setTimeout(renderLocations,2000);
}