const { successResponse, errorResponse } = require('../../../utils/response');
const { successMessages, errorMessages } = require('../../../utils/messages');


async function getCityWeather(req, res) {
  const { city } = req.query;
  try {

    let latLong = await getCityLatLong(city);
    
    let weather = await getWeather(latLong.lat, latLong.lon);

    return successResponse(req, res, { weather }, successMessages.DATA_FETCHED, 200);
  } catch (error) {
    return errorResponse(req, res, { error: error.message });
  }
}


async function getCityLatLong(cityName) {
  fetch(`https://geocode.maps.co/search?q=${cityName}`)
    .then(res => {
      res = res.json();
      if (res && res[0]) {
        return {
          lat: res[0].lat,
          lon: res[0].lon
        };
      } else {
        throw new Error('No coordinates found for city');
      }
    })
    .catch(error => { throw new Error('Error fetching city coordinates, please try again with country name!, e.g. city,country')})
}

async function getWeather(lat, lang) {
  // fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=${'f7e9c8c7f9f4c8a5e0e6a7d9f7e5f9b6'}`)
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=f7e9c8c7f9f4c8a5e0e6a7d9f7e5f9b6`)
  .then(res => {
    res = res.json();
    return res;
  })
  .catch(error => { throw new Error('Error fetching city coordinates, please try again with country name!, e.g. city,country')});
}


exports.getCityWeather = getCityWeather;

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://geocode.maps.co/search?q=surat,%20India