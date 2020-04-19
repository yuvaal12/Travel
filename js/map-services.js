'use strict';
var gLocations = [];
var map;
var iconBase = '../img/';
var feature;
var id = 0;
function addLocation(info,weather) {
    var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${info.lat},${info.lng}&key=AIzaSyDNaZfXPuRjFXlWD7R3gVeunJYjYHERdDg`
    getLoc(function(result){
        let adress = result[0].formatted_address; 
        console.log(adress);
        var loc = {
            id: id++,
            adress,
            weather
        };
         gLocations.push(loc);
    }, url)
}
function initMap() {
    var pos = {lat: -34.397, lng: 150.644 }
    map = new google.maps.Map(document.querySelector('.map'), {
        center: pos,
        zoom: 14
    });
    addLocation(pos,'first Pos');
}

function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    map.panTo(latLng);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function addMarker(feature) {
    var icons = {
        info: {
            icon: iconBase + 'info-i_maps.png'
        },
        home: {
            icon: iconBase + 'home-i_maps.png'
        }
    };
    var marker = new google.maps.Marker({
        position: feature.pos,
        icon: icons[feature.type].icon,
        draggable: true,
        map: map

    });
}

function getLocations() {
    return gLocations;
}

function getLoc(onSuccess, url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText);
            onSuccess(ans.results)  
            console.log(ans);
        }
    }
    xhr.open('GET', url)
    xhr.send();
}
function getLngLnt(loc) {
    var pos = loc[0].geometry.location;
    map.setCenter(pos);
    placeMarkerAndPanTo(pos, map);
    addLocation(pos,'cold');
}

function getToMyLoc(){
    var infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
            addLocation(pos,'Home')
            feature = {
                type: 'home',
                pos: pos
            }
            addMarker(feature);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}