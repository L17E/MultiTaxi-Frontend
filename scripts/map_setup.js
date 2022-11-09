function setLatestCoordinates(e) {
  const { lat, lng } = e.target.getCenter();
  sessionStorage.setItem("last_lat", lat.toString());
  sessionStorage.setItem("last_lng", lng.toString());
}

function setLatestZoom(e) {
  const level = e.target.getZoom();
  sessionStorage.setItem("last_zoom", level.toString());
}

function getLatestCoordinates() {
  const last_lat = sessionStorage.getItem("last_lat");
  const last_lng = sessionStorage.getItem("last_lng");
  if (last_lat && last_lng) {
    return [last_lat, last_lng];
  }
}

function getInputCoordinates() {
  const address_lat = localStorage.getItem("from_latitude");
  const address_lng = localStorage.getItem("from_longitude");
  if (address_lat && address_lng) {
    return [address_lat, address_lng];
  }
}

function getLatestZoom() {
  const zoom_level = sessionStorage.getItem("last_zoom");
  return zoom_level || 15
}

const DEFAULT_COORDINATES = [55.7545, 37.62];

function setView(map, coordinates) {
  const zoom_level = getLatestZoom();
  map.setView(coordinates, zoom_level);
}

function setup() {
  const element = document.querySelector("div[id$=map]")
  const map = L.map(element, {zoomControl: false})

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    minZoom: 11,
  }).addTo(map);

  map.addEventListener('dragend', setLatestCoordinates);
  map.addEventListener('zoomend', setLatestZoom);

  const zoom_in = document.querySelector(".map-zoom-in");
  zoom_in.addEventListener("click", (function() {
    map.setZoom(map.getZoom() + 1)
  }));

  const zoom_out = document.querySelector(".map-zoom-out");
  zoom_out.addEventListener("click", (function() {
    map.setZoom(map.getZoom() - 1)
  }));

  const set_current_location = document.querySelector(".map-current-location");
  set_current_location.addEventListener("click", (function () {
    const latest_coordinates = getLatestCoordinates();
    const input_coordinates = getInputCoordinates();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setView(map, [position.coords.latitude, position.coords.longitude]),
        () => setView(map, input_coordinates || DEFAULT_COORDINATES),
      );
    } else {
      setView(map, input_coordinates || DEFAULT_COORDINATES);
    }
  }));

  setTimeout(function(){ map.invalidateSize()}, 500);
  return map;
}

// !!!
const map = setup();

const latest_coordinates = getLatestCoordinates();
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => setView(map, [position.coords.latitude, position.coords.longitude]),
    () => setView(map, latest_coordinates || DEFAULT_COORDINATES),
  );
} else {
  setView(map, latest_coordinates || DEFAULT_COORDINATES);
}
