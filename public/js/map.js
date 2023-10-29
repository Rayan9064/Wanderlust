mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map ({
  container: "map", // container id
  //choose from mapbox;s core styles, or make your own style with mapbox studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [77.209, 28.6139],  // starting position [lng, lat]
  zoom: 9, // starting zoom
}); 

// console.log(coordinates);

// const marker = new mapboxgl.Marker({ color: "red" })
// .setLngLat(coordinates)
// .addTo(map);