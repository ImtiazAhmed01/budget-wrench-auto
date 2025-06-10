// import { MongoClient, ServerApiVersion } from 'mongodb';

// export default function dbConnect(collectionName) {
//     const uri = process.env.MONGODB_URI
//     // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//     const client = new MongoClient(uri, {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     });
//     return client.db(process.env.DB_NAME).collection(collectionName)
// }
// lib/dbConnect.js
// import { MongoClient, ServerApiVersion } from 'mongodb';

// let cachedClient = null;
// let cachedDb = null;

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

// lib/dbConnect.js
import { MongoClient, ServerApiVersion } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

export async function dbConnect(collectionName) {
    if (cachedClient && cachedDb) {
        return cachedDb.collection(collectionName);
    }

    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('MONGODB_URI is not defined in environment variables');
    }

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        cachedClient = client;
        cachedDb = db;
        return db.collection(collectionName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}