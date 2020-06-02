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

// init map
function initMap() {
  map = new google.maps.Map(mapDiv, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
}