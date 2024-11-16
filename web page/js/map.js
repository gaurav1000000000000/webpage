function initMap() {
    const location = { lat: 19.1076, lng: 73.0033 }; // Coordinates for Rabale MIDC, Navi Mumbai
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "OnestopNDT Location",
    });
}
