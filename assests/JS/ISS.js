

// **********************Git link to post! **************

// https://github.com/NizampatnamSai/ISS-Project.git

console.log(L)

var map = L.map('map').setView([0,0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/1280px-International_Space_Station.svg.png

// L.marker([51.5, -0.09]).addTo(map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();

    var myIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/1280px-International_Space_Station.svg.png',
        iconSize: [38, 32],
    });

    var pathicon =L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1024px-Location_dot_black.svg.png',
         iconSize: [15, 15],

    })
    let marker = L.marker([0, 0], { icon: myIcon }).addTo(map)

// let marker= L.marker([0,0]).addTo(map)

const fetchSpaceStationDetails= async()=>{
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    const data= await res.json()
    console.log(data)
    const {latitude,longitude}=data;
    console.log(latitude,longitude)
    // L.marker([latitude,longitude]).addTo(map)
    marker.setLatLng([latitude,longitude])
    L.marker([latitude,longitude], { icon: pathicon }).addTo(map)
}

fetchSpaceStationDetails()

setInterval(fetchSpaceStationDetails,1000)
// console.log(L)

// var map = L.map('map').setView([0,0], 2);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();