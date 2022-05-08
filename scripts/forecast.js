const APIkey = 'yGFZZK79j17l4dhohbT5VELOGC8aj5yS';


//get weather data
const getWeather = async (locationKey) => {

  const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locationKey}?apikey=${APIkey}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};

//get city
const getCity = async (city) => {

  const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?q=${city}&apikey=${APIkey}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};

