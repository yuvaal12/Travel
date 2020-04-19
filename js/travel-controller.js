import { locationPrevie as locationPreview } from './location-preview.js';
window.addEventListener('load', onInit)
<<<<<<< HEAD
    // var elCopyLoc = document.querySelector('.find-loc');
    // elCopyLoc.addListener('click', onFindLoc);
=======
var elCopyLoc = document.querySelector('.find-loc');
elCopyLoc.addEventListener('click',onFindLoc);
var elMyLoc = document.querySelector('.my-loc');
elMyLoc.addEventListener('click',onGoToMyloc);
>>>>>>> be9555f3b0224547d960b750243409afcd8ad27a

function onInit() {
    renderLocations()
}

function renderLocations() {
<<<<<<< HEAD
    const elTable = document.querySelector('table');
    var locs = getLocations();
    locs.forEach(function(loc) {
        const locPreview = new locationPreview(loc.id, loc.info)
=======
    const elTable = document.querySelector('tbody'); 
    elTable.innerHTML = '';
    var locs = getLocations();
    console.log(locs);
    locs.forEach(function (loc) {
        
        const locPreview = new locationPreview(loc.id,loc.adress,loc.weather)
>>>>>>> be9555f3b0224547d960b750243409afcd8ad27a
        const elRow = locPreview.render();
        elTable.appendChild(elRow);
    });

}
<<<<<<< HEAD

var elMap = document.querySelector('.map');
elMap.addEventListener('click', onMapClicked)

function onMapClicked() {
    var map = getMap()
    console.log(map);

    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map)
        setTimeout(renderLocations, 2000);
    })
}

function onFindLoc() {
    var adress = document.querySelector('.adress').value;
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${adress},+CA&key=AIzaSyDNaZfXPuRjFXlWD7R3gVeunJYjYHERdDg`
    getLoc(getLngLnt, url);
=======
function onFindLoc(){
    var adress = document.querySelector('.adress').value;
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${adress},+CA&key=AIzaSyDNaZfXPuRjFXlWD7R3gVeunJYjYHERdDg`
    getLoc(getLngLnt,url);
    setTimeout(renderLocations,2000);
}

function onGoToMyloc(){
    getToMyLoc();
    setTimeout(renderLocations,2000);
>>>>>>> be9555f3b0224547d960b750243409afcd8ad27a
}