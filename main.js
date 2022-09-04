const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
const urlApi = 'ac8a5795573febd427041bd612b4ee2b'

const country_api = async(city) =>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlApi}`
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
country_api()