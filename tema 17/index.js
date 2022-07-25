let map;
let marcador;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.97607909475886, lng:2.3952755454556574 },
    zoom: 5,
    });


    marcador1 = new google.maps.Marker({
    position: { lat: 38.99698265746609, lng: -1.8605925780870258},
    map,
    title: "Como en casa en ningún lado"
})

    marcador2 = new google.maps.Marker({
    position: { lat: 43.76657384776394, lng: 11.242467610116458 }, 
    map,
    title: "Florencia, mi segundo hogar erasmus"
})

    marcador3 = new google.maps.Marker({
    position: { lat: 48.86815540169285, lng: 2.783732051044985 }, 
    map,
    title: "Mi primer destino con mis peques"
})

    geoPos();
}


navigator.geolocation.watchPosition(position => { console.log(position)})

function geoPos(){
    if(navigator.geolocation)
    {
        const geoLoc = navigator.geolocation
        const watchPos = geoLoc.watchPosition(position => {
            const nuevaPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            marker.setPosition(nuevaPos)
            
        }, error => {console.error(error)},{ timeout: 60000 })
    } else {
        alert("tu navegador no admite geolocalizcacion")
    }
}


window.initMap = initMap;