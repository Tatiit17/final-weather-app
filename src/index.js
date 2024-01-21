function refreshWeather(response) {
	let temperatureElement = document.querySelector("#temperature");
	let temperature = response.data.temperature.current;
	let cityElement = document.querySelector("#city");
	let descriptionElement = document.querySelector("#description");
	let humidityElement = document.querySelector("#humidity");
	let windElement = document.querySelector("#wind");
	let feelsElement = document.querySelector("#feels-like");
	let feels = response.data.temperature.feels_like;

	feelsElement.innerHTML = `${Math.round(feels)}°C`;
	windElement.innerHTML = `${response.data.wind.speed} km/h`;
	humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
	descriptionElement.innerHTML = response.data.condition.description;
	cityElement.innerHTML = response.data.city;
	temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
	let apiKey = "2a94c32a70f6060a6a93ft57413o5b0a";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
	axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-input");

	searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Poznan");
