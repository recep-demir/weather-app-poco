const api = {
    key: "44502fc60dbbececfb2a2a52f202564e",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const searchBox = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');
const mainBg = document.getElementById('main-bg');
const temp = document.querySelector('.temp');

searchButton.addEventListener('click', function(){
  if (searchBox.value.length > 0){
    getWeather(searchBox.value);
    temp.style.display = "block";
  }
  else {
    Swal.fire({
      title: 'Oops...',
      text: 'Please enter the location and try again.',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  }
});


function getWeather(location){
  fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    getLocation(data);
  })
  .catch((error) => {
    Swal.fire({
      title: "Error!",
      text: error.message || "An unexpected error occurred.",
      icon: "error",
      confirmButtonText: "OK"
    });
  });
}

function getLocation(data) {
  const city = document.getElementById("city");
  const date = document.getElementById("date");
  const temperature = document.getElementById("temp");
  const weather = document.getElementById("weather");
  const now = new Date();
  
  date.textContent = buildDate(now);
  city.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent= `${Math.round(data.main.temp)}°C`;
    weather.textContent = `${data.weather[0].description.toUpperCase()}`;
    if (data.main.temp >= 16){
        mainBg.classList.add('warm-bg');
    }
    else {
        mainBg.classList.remove('warm-bg');
    }
}

function buildDate(d) {
  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day}, ${date} ${month} ${year}`;
}

searchBox.addEventListener('keypress', function(e){
  if (e.key === 'Enter'){
    e.preventDefault();
    searchButton.click();
  }
});