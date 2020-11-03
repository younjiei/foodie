function myMap() {
  var myLatLng1 = {
    lat: 37.550508,
    lng: 127.073854
  };

  var restaurant=[
    [37.5502335,127.0715217],[37.5483151,127.0716583],[37.5483151,127.0716583],[37.5499915,127.0707089],
    [37.5519738,127.0722658],[37.5490168,127.0702453],[37.5517541,127.0715268],[37.5535381,127.0746871],[37.549079,127.072223]];
  var map1 = new google.maps.Map(document.getElementById("googleMap1"), {
    center: myLatLng1,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: myLatLng1,
    animation: google.maps.Animation.BOUNCE,
    title: "내위치"
  });
  marker.setMap(map1);

  var marker2, i;

    for (i = 0; i < restaurant.length; i++) {

      marker2 = new google.maps.Marker({

        id:i,

        position: new google.maps.LatLng(restaurant[i][0], restaurant[i][1]),

        map: map1

      });
    }

  var infowindow = new google.maps.InfoWindow({
    content: "나의위치"
  });
  infowindow.open(map1, marker);

  function placeMarker(map, location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });


  }
}
