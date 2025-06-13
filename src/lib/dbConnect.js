
// import { MongoClient, ServerApiVersion } from 'mongodb';

// let cachedClient = null;
// let cachedDb = null;

// export const collectionNamesObj = {
//     servicesCollection: "services",
//     userCollection: "user"
// }
// export async function dbConnect(collectionName) {
//     if (cachedClient && cachedDb) {
//         return cachedDb.collection(collectionName);
//     }

//     const uri = process.env.MONGODB_URI;
//     if (!uri) {
//         throw new Error('MONGODB_URI is not defined in environment variables');
//     }

//     const client = new MongoClient(uri, {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         },
//     });

//     try {
//         await client.connect();
//         const db = client.db(process.env.DB_NAME);
//         cachedClient = client;
//         cachedDb = db;
//         return db.collection(collectionName);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         throw error;
//     }
// }

import { MongoClient, ServerApiVersion } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export const collectionNamesObj = {
    servicesCollection: "services",
    userCollection: "user",
    bookingCollection: "booking",
};

export async function dbConnect(collectionName) {
    if (cachedClient && cachedDb) {
        return cachedDb.collection(collectionName);
    }

    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not defined");
    }

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    await client.connect(); // Ensure the client is connected before using
    const db = client.db(process.env.DB_NAME);
    cachedClient = client;
    cachedDb = db;

    return db.collection(collectionName);
}
