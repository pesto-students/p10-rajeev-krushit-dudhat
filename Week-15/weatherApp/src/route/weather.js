const exporess = require('express');
const router = exporess.Router();

const weatherController = require('../controllers/v1/weather/weather');


// router.put('/', cityWeatherController);
router.get('/forecast', weatherController);
router.get('/', weatherController);


module.exports = router;
