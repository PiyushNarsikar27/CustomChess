import { Db, MongoClient } from "mongodb";
const connectionString =
  "mongodb+srv://piyushnarsikar:engineersam@customchesscluster.duztelm.mongodb.net/?retryWrites=true&w=majority";


export default class DBConnection{
    async getDB(): Promise<Db> {
        const client = new MongoClient(connectionString)
        const conn = await client.connect()
        const db = conn.db("custom_chess")
        return db
    }
}
