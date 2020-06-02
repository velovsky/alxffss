const inputPoi = window.document.getElementById('inputPoi');
const mapDiv = window.document.getElementById('map-poi'); // access map component

inputPoi.onclick = () => {
  mapDiv.style.display = 'block';
};

// init map
function initMap() {
  map = new google.maps.Map(document.getElementById('map-poi'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
}