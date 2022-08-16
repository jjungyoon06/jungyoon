const API_KEY = "aa177cea535f054317087570fe1f0b3c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}




navigator.geol 