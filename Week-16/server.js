require('dotenv').config();
const chalk = require('chalk');
const app = require('./app');
const { db } = require('./src/db/conn');

const port = process.env.APP_PORT || 3000;

const server = app.listen(port, () => {
  console.info(`App running on port ${chalk.greenBright(port)}...`);
});

// In case of an error
app.on('error', (appErr, appCtx) => {
  console.error('app error', appErr.stack);
  console.error('on url', appCtx.req.url);
  console.error('with headers', appCtx.req.headers);
});

// Handle uncaught exceptions
process.on('uncaughtException', (uncaughtExc) => {
  console.warn(chalk.bgRed('UNCAUGHT EXCEPTION! 💥 Shutting down...'));
  console.error('uncaughtException Err::', uncaughtExc);
  console.warn('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.warn(chalk.bgRed('UNHANDLED REJECTION! 💥 Shutting down...'));
  console.warn(err.name, err.message);
  // Close server & exit process
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.info('👋 SIGTERM RECEIVED. Shutting down gracefully');
  db.close();
  server.close(() => {
    console.info('💥 Process terminated!');
  });
});
