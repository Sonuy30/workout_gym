import { ObjectId } from "mongodb";
import { getDatabase } from "../dbconfig/dbconfig";

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  age: number;
}

export async function getUsers(): Promise<User[]> {
  const db = await getDatabase("your-database-name");
  return db.collection<User>("users").find({}).toArray();
}

export async function addUser(user: User): Promise<void> {
  const db = await getDatabase("your-database-name");
  await db.collection<User>("users").insertOne(user);
}
