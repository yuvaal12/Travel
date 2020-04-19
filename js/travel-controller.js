'use strict';
function initMap() {
    var pos = getPos();
    var map = new google.maps.Map(
        document.querySelector('.map'), {zoom: 4, center: pos});
    var marker = new google.maps.Marker({position: pos, map: map});
  }
