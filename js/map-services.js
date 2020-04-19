'use strict';
var gLocations = [];
var map;
var iconBase = '../img/';
var feature;

function initMap() {
    map = new google.maps.Map(document.querySelector('.map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 14
    });
    console.log(map);
    var infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
            feature = {
                type: 'home',
                pos: pos
            }
            addMarker(feature);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });
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


function addLocation(location) {
    gLocations.push(location);
}

function getLocations(){
    return gLocations;
}