const CityInput = document.querySelector('form');
const cardImg = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const details = document.querySelector('.details');
const card = document.querySelector('.card');

const forecast = new Forecast();


const UpdateUI = ({ CityData, Weather }) => {

  details.innerHTML = `
        <h2 class="h5">${CityData.EnglishName}</h2>
        <div>${Weather.WeatherText}</div>
        <div class="display-6 my-4">
          <span>${Weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
  `;

  const iconSrc = `img/icons/${Weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  const cardimgSrc = Weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  cardImg.setAttribute('src', cardimgSrc);

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

};

CityInput.addEventListener('submit', e => {
  e.preventDefault();

  const city = CityInput.city.value.trim();
  CityInput.reset();

  forecast.UpdateWeather(city)
    .then(data => UpdateUI(data))
    .catch(err => console.log(err));

  //localstorage
  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  forecast.UpdateWeather(localStorage.getItem('city'))
    .then(data => UpdateUI(data))
    .catch(error => console.log(error));
}