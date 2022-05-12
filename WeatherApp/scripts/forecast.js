
class Forecast {
  constructor() {
    this.APIkey = 'q4owJvplGrC14xiQ4RNFS6aDfHUpVKqf';

    this.WeatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';

    this.CityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }

  async UpdateWeather(city) {
    const location = await this.getCity(city);

    const Weather = await this.getWeather(location.Key);


    return {
      CityData: location,
      Weather
    };
  }

  async getCity(city) {
    const query = `?q=${city}&apikey=${this.APIkey}`;

    const response = await fetch(this.CityURL + query);
    const data = await response.json();

    return data[0];
  }

  async getWeather(locationKey) {
    const query = `${locationKey}?apikey=${this.APIkey}`;

    const response = await fetch(this.WeatherURL + query);
    const data = await response.json();

    return data[0];
  }

}

