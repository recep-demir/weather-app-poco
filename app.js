const api = {
    key: "44502fc60dbbececfb2a2a52f202564e",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const searchBox = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', function(){
  if (searchBox.value.length > 0){
    getWeather(searchBox.value);
  }
  else {
    alert("Oppps... Please enter the location and try again.")
  }
})

function getWeather(location){
  fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    getLocation(data)
  })  
}


function getLocation(data) {
  const city = document.getElementById("city");
  const date = document.getElementById("date");
  const temperature = document.getElementById("temp");
  const weather = document.getElementById("weather");
  const now = new Date();
  let date1 = now.getDate()

  city.innerHTML = `${data.name}, ${data.sys.country}`;
  date.innerHTML = `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;
  
}



