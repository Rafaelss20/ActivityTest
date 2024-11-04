export class resCreateUser {
    firstName: string;
    lastName: string;
    mail: string;
    password: string;
    cpf: string;
    nascimento: Date;
    confirmPassword: string;
    LowerCase: string;
    UpperCase: string;
    EightChar: string;
    verify: string;
    number: string;
    constructor(
        firstName?: string,
        lastName?: string,
        mail?: string,
        password?: string,
        cpf?: string,
        nascimento?: Date,
        confirmPassword?: string,
        LowerCase?: string,
        UpperCase?: string,
        EightChar?: string,
        verify?: string,
        number?: string) {
        this.firstName = firstName? firstName: '';
        this.lastName=lastName? lastName: '' ;
        this.mail=mail? mail: '' ;
        this.password=password? password: '' ;
        this.cpf=cpf? cpf: '';
        this.nascimento=nascimento? nascimento: new Date() ;
        this.confirmPassword=confirmPassword? confirmPassword: '';
        this.LowerCase=LowerCase? LowerCase: '';
        this.UpperCase=UpperCase? UpperCase: '';
        this.EightChar=EightChar? EightChar: '';
        this.verify=verify? verify: '';
        this.number=number? number: '';
    }
}