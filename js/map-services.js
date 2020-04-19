'use strict';
<<<<<<< HEAD
var gLocations = [{
    id: 1,
    info: { lat: -34.397, lng: 150.644 }
}];
=======
var gLocations = [];
>>>>>>> be9555f3b0224547d960b750243409afcd8ad27a
var map;
var iconBase = '../img/';
var feature;
var id = 0;
<<<<<<< HEAD

function addLocation(info) {
    var loc = {
        id: id++,
        info
    };
    gLocations.push(loc);
    // console.log(gLocations);

}



=======
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
>>>>>>> be9555f3b0224547d960b750243409afcd8ad27a
function initMap() {
    var pos = {lat: -34.397, lng: 150.644 }
    map = new google.maps.Map(document.querySelector('.map'), {
        center: pos,
        zoom: 14
    });
<<<<<<< HEAD
    var infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            //addLocation(pos);
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
=======
    addLocation(pos,'first Pos');
>>>>>>> be9555f3b0224547d960b750243409afcd8ad27a
}

function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    addLocation(latLng)
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

<<<<<<< HEAD

=======
>>>>>>> be9555f3b0224547d960b750243409afcd8ad27a
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
<<<<<<< HEAD
}


function getMap() { return map }
=======
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
>>>>>>> be9555f3b0224547d960b750243409afcd8ad27a
