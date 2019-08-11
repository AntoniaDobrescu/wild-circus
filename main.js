function initMap() {
  const loc = { lat: 44.426765, lng: 26.102537};
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  const marker = new google.maps.Marker({ position: loc, map: map});
}