const inputPoi = window.document.getElementById('input-poi');
const mapWrapper = window.document.getElementById('map-wrapper'); // access map component
const mapDiv = window.document.getElementById('map-poi');

// map toggle
inputPoi.onclick = () => {
  mapWrapper.style.display = 'flex';
};

mapWrapper.onclick = () => {
  mapWrapper.style.display = 'none';
};

mapDiv.onclick = () => {
  event.stopPropagation();
};

// MAP functions
function initMap() {
  const initLatlng = {lat: -25.363, lng: 131.044};

  map = new google.maps.Map(mapDiv, {
        center: initLatlng,
        zoom: 8
      });

  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow(
    {content: 'Click the map to get Lat/Lng!', position: initLatlng});
  infoWindow.open(map);

  // Configure the click listener.
  map.addListener('click', function(mapsMouseEvent) {
    // Close the current InfoWindow.
    infoWindow.close();

    const selectedLatLng = mapsMouseEvent.latLng;

    // add values to input
    inputPoi.value = `${selectedLatLng.lat()} ${selectedLatLng.lng()}`;
    // close map window
    mapWrapper.style.display = 'none';
  });
}