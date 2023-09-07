const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();
require('./src/db/conn').connect();

// routes
const authRouter = require('./src/routes/auth');
const userRouter = require('./src/routes/users');
const assetRouter = require('./src/routes/assets');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));

app.use('/api/v1', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/asset', assetRouter);


app.use((req, res) => {
  console.log(req.body);
  return res.status(404).json({ message: 'Not found' })});

module.exports = app;
