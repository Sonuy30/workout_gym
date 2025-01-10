// import { MongoClient, Db } from "mongodb";

// const uri: string | undefined = process.env.MONGODB_URI; // MongoDB connection string
// const options = {};

// if (!uri) {
//   throw new Error("Please add your MongoDB URI to .env.local");
// }

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {
//   // In development, use a global variable to preserve the client across hot reloads
//   if (!(global as any)._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     (global as any)._mongoClientPromise = client.connect();
//   }
//   clientPromise = (global as any)._mongoClientPromise;
// } else {
//   // In production, always create a new connection
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export async function getDatabase(dbName: string): Promise<Db> {
//   const client = await clientPromise;
//   return client.db(dbName);
// }

// export default clientPromise;
