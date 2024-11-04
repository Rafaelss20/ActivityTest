import { Request, Response } from 'express'
import { insert } from '../database/db';
import { monthyUser } from '../database/model/User';
import { hasEightChar, hasLowerCase, hasNumber, hasUpperCase, veriftPassword } from '../utils/CreateUserFunctions';
import { resCreateUser } from './model/ResModelCreateUser';

// const db: any = connectDataBase()
export class CreateUser {
  // private database: any

  constructor() {
  }

  async save(req: Request, res: Response) {
    const { firstName, lastName, email, password, cpf, nascimento, confirmPassword } = req.body
    let isPassword: boolean = true
    let result: any = new resCreateUser(firstName,lastName,email,password,cpf,nascimento,confirmPassword)
    if (!hasNumber(password)) {
      result.number = '• Não contem número!';
      isPassword = false
    }
    if (!hasLowerCase(password)) {
      result.LowerCase = '• Não contem letra minuscula!'
      isPassword = false
    }
    if (!hasUpperCase(password)) {
      result.UpperCase = '• Não contem letra maíscula!'
      isPassword = false
    }
    if (!hasEightChar(password)) {
      result.EightChar = '• Não contem 8 caractéres!'
      isPassword = false
    }
    if (!veriftPassword(password, confirmPassword)) {
      result.verify = '• Senha não são identicas!'
      isPassword = false
    }
    if (isPassword) {
      const user = new monthyUser(firstName, lastName, email, password, cpf, nascimento)
      console.log(user);
      await insert(user)
      return res.render("signup",{msg: 'Cadastrado com sucesso'})
    } else {
      return res.render('signup', { result: result })
    }
  }
}


