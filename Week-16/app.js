const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();
require('./src/db/conn').connect();

// routes
const authRouter = require('./src/routes/auth');
const userRouter = require('./src/routes/users');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));

app.use('/api/v1', authRouter);
app.use('/user', userRouter);

app.use((req, res) => {
  console.log(req.body);
  return res.status(404).json({ message: 'Not found' })});

module.exports = app;
