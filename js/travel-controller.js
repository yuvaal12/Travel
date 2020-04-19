import { locationPrevie as locationPreview } from './location-preview.js';
window.addEventListener('load', onInit)
    // var elCopyLoc = document.querySelector('.find-loc');
    // elCopyLoc.addListener('click', onFindLoc);

function onInit() {
    renderLocations()
}

function renderLocations() {
    const elTable = document.querySelector('table');
    var locs = getLocations();
    locs.forEach(function(loc) {
        const locPreview = new locationPreview(loc.id, loc.info)
        const elRow = locPreview.render();
        elTable.appendChild(elRow);
    });

}

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
}