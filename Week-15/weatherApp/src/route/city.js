const exporess = require('express');
const router = exporess.Router();

const cityWeatherController = require('../controllers/v1/city/city');


// router.put('/', cityWeatherController);
router.get('/', cityWeatherController.getCityWeather);
// router.get('/:cityId', cityWeatherController);

module.exports = router;
