import { MongoClient } from 'mongodb'
import dotenv from "dotenv"
import { monthyUser } from './model/User';
import { Sequelize } from 'sequelize';

dotenv.config()

export const db = new Sequelize( 'activityTeste', 'root', 'root', {
    host:"localhost",
    dialect: 'mysql',
    port: 3306
});

db.authenticate()
.then(function(){
    console.log("Conectado")})
.catch(function(){
    console.log("Não conectado")
});

const usersdatabe = db.define('users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    userActivity: {
        type: Sequelize.BOOLEAN
    },
    userBlock: {
        type: Sequelize.BOOLEAN
    },
    tryPassword: {
        type: Sequelize.INTEGER
    },
    cpf: {
        type: Sequelize.STRING
    },
    nascimento: {
        type: Sequelize.STRING
    },
    dateCreate: {
        type: Sequelize.STRING
    }
})

usersdatabe.sync({force:true})
// let singleton: any;


// export async function connectDataBase() {
//     //Função para não requistar todo momento, deixando o serviço lento
//     if(singleton){
//         console.log('banco já conectado');
//         return singleton;
//     }
//     let host: any = process.env.MONGO_HOST
//     //Conenctando ao BD
//     const client = new MongoClient(host)
//     await client.connect()

//     singleton = client.db(process.env.MONGO_DATABASE)
//     console.log('banco conectado');
    
//     return await singleton
// }

// export async function insert(customer: monthyUser) {
//     const db = await connectDataBase();
//     // db.collection("users").Schema()
//     return db.collection("users").insertOne(customer)

// }