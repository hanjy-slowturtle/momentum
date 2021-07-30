const API_KEY = '2786fc5e0dbc3157a5e44e316caf75cb';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const weatherSpanArr = document.querySelectorAll("#weather span");
            weatherSpanArr[0].innerText = `${data.weather[0].main} / ${data.main.temp}`;
            weatherSpanArr[1].innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);