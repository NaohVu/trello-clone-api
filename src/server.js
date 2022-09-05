// const express = require('express');
import express from 'express';

import { connectDB } from './config/mongodb';
import { env } from './config/environment';
import { BoardModel } from './models/board.model';

connectDB()
  .then(() => console.log('success'))
  .then(() => bootServer())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const bootServer = () => {
  const app = express();

  app.get('/test', async (req, res) => {
    res.send('Hello World!');
  });

  app.listen(env.APP_PORT, () => {
    console.log(`Example app listening on port ${env.APP_PORT}`);
  });
};
