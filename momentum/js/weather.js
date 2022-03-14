function onGeoOk(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  console.log("You live it", lat, lng);
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
