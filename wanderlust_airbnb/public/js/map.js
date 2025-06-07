



mapboxgl.accessToken = mapToken;
        
const map = new mapboxgl.Map({
container: "map", // container ID
style: 'mapbox://styles/mapbox/streets-v12',
center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
zoom: 9, // starting zoom
});


const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`))
    .addTo(map);
    
// const map = L.map('map').setView(coordinates, 13); // 'coordinates' should be passed from EJS

// // Set up the OpenStreetMap tiles
// L.tileLayer('https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Add a red marker at the specified coordinates with a popup
// const marker = L.marker(coordinates)
//     .addTo(map)
//     .bindPopup('<h3>Welcome to Wanderlust</h3>')
//     .openPopup();     
    