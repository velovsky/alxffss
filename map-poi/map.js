const inputPoi = window.document.getElementById('input-poi');
const mapWrapper = window.document.getElementById('map-wrapper'); // access map component
const mapDiv = window.document.getElementById('map-poi');
const infoPoi = window.document.getElementById('info-poi');

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
  const initLatlng = {lat: 38.802210, lng: -77.043071}; // Alexandria

  let map = new google.maps.Map(mapDiv, {
        center: initLatlng,
        zoom: 14
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

    // TODO: add a marker and a confirm button

    // add values to input & poi info
    inputPoi.value = `${selectedLatLng.lat()} ${selectedLatLng.lng()}`;
    infoPoi.querySelector('.lat').innerText = selectedLatLng.lat().toFixed(4);
    infoPoi.querySelector('.lng').innerText = selectedLatLng.lng().toFixed(4);

    // close map window
    mapWrapper.style.display = 'none';
  });
}