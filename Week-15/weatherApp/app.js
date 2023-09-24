const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// routes
const cityRouter = require('./src/route/city');
const weatherRouter = require('./src/route/weather');

const app = express();

app.use(cors());

app.use(cookieParser('secret', {

}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));

app.use('/api/v1/weather', weatherRouter);
app.use('/api/v1/city/weather', cityRouter);


app.use((req, res) => {
  console.log(req.body);
  return res.status(404).json({ message: 'Not found' })
});

module.exports = app;