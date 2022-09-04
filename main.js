const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
const urlApi = 'ac8a5795573febd427041bd612b4ee2b'

const country_api = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlApi}&units=metric`
  const res = await fetch(url);
  const data = await res.json();
  tptr(data);
}

const tptr = data => {
  const weather = document.getElementById('temperature')
  weather.innerText = data.main.temp;
}

document.getElementById('btn-search').addEventListener('click', function () {
  const field = document.getElementById('input-field');
  const city = field.value;
  document.getElementById('city').innerText = city;
  country_api(city)

})


country_api('dhaka')