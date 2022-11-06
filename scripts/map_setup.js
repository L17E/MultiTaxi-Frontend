function setup(latitude, longitude) {
  const element = document.querySelector("div[id$=map]")
  const map = L.map(element, {zoomControl: false}).setView([latitude, longitude], 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    minZoom: 11,
  }).addTo(map);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => setup(position.coords.latitude, position.coords.longitude),
    () => setup(55.7545, 37.62),
  );
} else {
  setup(55.7545, 37.62);
}
