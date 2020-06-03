const inputPoi = window.document.getElementById('input-poi');
const mapWrapper = window.document.getElementById('map-wrapper'); // access map component
const mapDiv = window.document.getElementById('map-poi');
const infoPoi = window.document.getElementById('info-poi');
const submitBtn = mapWrapper.querySelector('.submit');

// map toggle
inputPoi.onclick = () => {
  mapWrapper.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

function closePopUp() {
  document.body.style.overflow = '';
  mapWrapper.style.display = 'none';
}

mapWrapper.onclick = () => {
  closePopUp();
};

mapDiv.onclick = () => {
  event.stopPropagation();
};

submitBtn.onclick = () => {
  event.stopPropagation();
  closePopUp();
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

  let selectedMarker;

  // Configure the click listener.
  map.addListener('click', function(mapsMouseEvent) {
    // Close the current InfoWindow.
    infoWindow.close();

    const selectedLatLng = mapsMouseEvent.latLng;

    // remove exisitng marker, if exists
    if (selectedMarker) {
      selectedMarker.setMap(null);
    }

    // create new one
    selectedMarker = new google.maps.Marker({
      position: selectedLatLng,
      map: map,
      title: 'This is the selected spot'
    });

    // add values to input & poi info
    inputPoi.value = `${selectedLatLng.lat()} ${selectedLatLng.lng()}`;
    infoPoi.querySelector('.lat').innerText = selectedLatLng.lat().toFixed(4);
    infoPoi.querySelector('.lng').innerText = selectedLatLng.lng().toFixed(4);

    // enable submit btn
    if (submitBtn.disabled) {
      submitBtn.disabled = false;
    }
  });
}