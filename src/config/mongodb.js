import { MongoClient } from 'mongodb';
import { env } from './environment';

let dbInstant = null;

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    await client.connect();

    dbInstant = client.db(env.DATABASE_NAME);
};

export const getDB = () => {
    if (!dbInstant) throw new Error('Must connect to DB');
    return dbInstant;
};
