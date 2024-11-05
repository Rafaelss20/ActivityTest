import { MongoClient } from "mongodb";
import dotenv from "dotenv"
import { monthyUser } from "./model/User";


dotenv.config()

let singleton: any;
export async function connectDataBase() {
    //Função para não requistar todo momento, deixando o serviço lento
    if(singleton){
        console.log('banco já conectado');
        return singleton;
    }
    let host: any = process.env.MONGO_HOST
    //Conenctando ao BD
    const client = new MongoClient(host)
    await client.connect()

    singleton = client.db(process.env.MONGO_DATABASE)
    console.log('banco conectado');
    return await singleton
}

export async function insert(customer: monthyUser) {
    const db = await connectDataBase();
    // db.collection("users").Schema()
    return db.collection("users").insertOne(customer)
}
export async function insertProducts(params:any) {
    const db = await connectDataBase();
    return db.collection("products").insertMany(params)
}

export async function findProducts(value:any) {
    const db = await connectDataBase();
    if (value === null) {
        return db.collection('products').find().toArray();
    }
    return db.collection('products').find({ name: value }).toArray();
}
