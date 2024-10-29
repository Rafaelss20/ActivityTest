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
    static create(firstName: string, lastName: string, email: string, password: string, cpf: string, nascimento: Date): monthyUser{
        return new monthyUser(firstName,lastName,email,password,cpf,nascimento)
    }
}