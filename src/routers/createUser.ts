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
    let result = new resCreateUser(firstName,lastName,email,password,cpf,nascimento,confirmPassword)
    if (!hasNumber(password)) {
      result.number = 'block';
      isPassword = false
    }
    if (!hasLowerCase(password)) {
      result.LowerCase = 'block'
      isPassword = false
    }
    if (!hasUpperCase(password)) {
      result.UpperCase = 'block'
      isPassword = false
    }
    if (!hasEightChar(password)) {
      result.EightChar = 'block'
      isPassword = false
    }
    if (!veriftPassword(password, confirmPassword)) {
      result.verify = 'block'
      isPassword = false
    }
    if (isPassword) {
      const user = new monthyUser(firstName, lastName, email, password, cpf, nascimento)
      console.log(user);
      await insert(user)
      res.render('createuser', { msg: 'Cadastrado com sucesso' })
    } else {
      res.render('createuser', { result: result })
    }
    // if (password === confirmPassword) {
    //   return res.addListener('close',()=>{
    //     'teste'
    //   })
    // }
    // const user = new monthyUser(firstName, lastName, email, password, cpf, nascimento)
    // console.log(user);
    // await insert(user)
    // res.send('sucess')
    //   const div = document.createElement('div')
    //   div.innerHTML = '<h1>Enviado com Sucesso</h1>'
    //   // setInterval(()=>{
    //   //   div.remove()
    //   // }, 5* 1000)
  }
}


