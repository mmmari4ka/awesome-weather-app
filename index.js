function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#exampleInputEmail1").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Searching for ${searchInput}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showWeather(response) {
  let cardHeaderId = document.querySelector("#exampleInputEmail1");
  let temperature = Math.round(response.data.main.temp);
  cardHeaderId.innerHTML = `${response.data.name}`;

  let cardTitleId = document.querySelector("#cardTitleId");
  cardTitleId.innerHTML = `${temperature}°C`;
}

function retrievePosition(position) {
  let apiKey = "21a82c254282e7f41002f03d1295cbaa";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
