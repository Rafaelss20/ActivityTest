// import { db } from "../db";
// import { Sequelize } from "sequelize";

export class monthyUser {
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private userActivity: boolean;
    private userBlock: boolean;
    private tryPassword: number;
    private cpf: string;
    private nascimento: Date;
    private dateCreate: Date;

    constructor(firstName: string, lastName: string, email: string, password: string, cpf: string, nascimento: Date) {
        this.cpf = cpf;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nascimento = nascimento;
        this.userActivity = true;
        this.userBlock = false;
        this.tryPassword = 0;
        this.password = password;
        this.dateCreate = new Date()
    }
    static create(firstName: string, lastName: string, email: string, password: string, cpf: string, nascimento: Date): monthyUser {
        return new monthyUser(firstName, lastName, email, password, cpf, nascimento)
    }
}
const users = db.define('users', {
    firstName: {
        type: Sequelize.strin
    },
    lastName: {
        type: Sequelize.string
    },
    email: {
        type: Sequelize.string
    },
    password: {
        type: Sequelize.string
    },
    userActivity: {
        type: Sequelize.boolean
    },
    userBlock: {
        type: Sequelize.boolean
    },
    tryPassword: {
        type: Sequelize.number
    },
    cpf: {
        type: Sequelize.string
    },
    nascimento: {
        type: Sequelize.Date
    },
    dateCreate: {
        type: Sequelize.Date
    }
})

users.sync({force:true})