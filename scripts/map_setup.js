function setLastCoordinates(e) {
  const { lat, lng } = e.target.getCenter();
  sessionStorage.setItem("last_lat", lat.toString());
  sessionStorage.setItem("last_lng", lng.toString());
}

function setLastZoom(e) {
  const level = e.target.getZoom();
  sessionStorage.setItem("last_zoom", level.toString());
}

function setup(latitude, longitude, zoom_level) {
  const element = document.querySelector("div[id$=map]")
  const map = L.map(element, {zoomControl: true}).setView([latitude, longitude], zoom_level);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    minZoom: 11,
  }).addTo(map);

  map.zoomControl.setPosition('bottomright');
  map.addEventListener('dragend', setLastCoordinates)
  map.addEventListener('zoomend', setLastZoom)

  setTimeout(function(){ map.invalidateSize()}, 500);
}

function getLastCoordinates() {
  const last_lat = sessionStorage.getItem("last_lat");
  const last_lng = sessionStorage.getItem("last_lng");

  if(last_lat && last_lng) {
    return [last_lat, last_lng]
  } else {
    return [55.7545, 37.62]
  }
}

function getLastZoom() {
  const zoom_level = sessionStorage.getItem("last_zoom");
  return zoom_level || 15
}

const coordinates = getLastCoordinates();
const zoom_level = getLastZoom();
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => setup(position.coords.latitude, position.coords.longitude, zoom_level),
    () => setup(...coordinates, zoom_level),
  );
} else {
  setup(...coordinates, zoom_level);
}
