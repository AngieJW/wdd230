let temperature = parseInt(document.querySelector("#temperature").textContent)
let windSpeed = parseInt(document.querySelector("#wind-speed").textContent)
let windChill = document.querySelector("#chill")

calculateWindchill()

function calculateWindchill() {
    if ((temperature <= 50) && (windSpeed > 3)) {
        windChill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * (windSpeed**.16)) + (0.4275 * temperature * (windSpeed**.16)))
        console.log(windChill)
        windChill.textContent = windChill
    }
    else {
        windChill.textContent = "N/A";
    }
}