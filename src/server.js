// const express = require('express');
import express from 'express';
import cors from 'cors';
import { corsOptions } from './config/cors';

import { connectDB } from './config/mongodb';
import { env } from './config/environment';
import { apiV1 } from './routes/v1';

connectDB()
    .then(() => console.log('success'))
    .then(() => bootServer())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

const bootServer = () => {
    const app = express();

    app.use(cors(corsOptions));

    //enable req.body
    app.use(express.json());

    app.use('/v1', apiV1);

    app.listen(env.APP_PORT || process.env.PORT, () => {
        console.log('app is running');
    });
};
