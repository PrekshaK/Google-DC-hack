function initMap() {
  var myLatLng = {lat: 39.828200, lng: -98.579996};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });
}


