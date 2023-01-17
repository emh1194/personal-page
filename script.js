// Initialize and add the map
function initMap() {
    // The location of Uluru
    const evansville = { lat: 37.971558, lng: -87.571091 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: evansville,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: evansville,
      map: map,
    });
  }
  
  window.initMap = initMap;